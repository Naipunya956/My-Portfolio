import React, { useState } from 'react';
import { Terminal, ShieldCheck, Check, CornerDownLeft, Github } from 'lucide-react';

interface CommandHistory {
  prompt: string;
  suggestedCommand: string;
  explanation: string;
  status: 'pending' | 'confirmed' | 'executed' | 'cancelled';
  riskLevel: 'safe' | 'caution' | 'dangerous';
}

export const InteractiveTerminal: React.FC = () => {
  const [inputQuery, setInputQuery] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      prompt: 'Find all PDF files modified in the last 7 days',
      suggestedCommand: 'find . -name "*.pdf" -mtime -7',
      explanation: 'Scans current working directory recursively for PDF files modified within the past week.',
      status: 'executed',
      riskLevel: 'safe',
    },
    {
      prompt: 'Clean node_modules cache and reinstall packages',
      suggestedCommand: 'rm -rf node_modules package-lock.json && npm install',
      explanation: 'Removes local dependency cache and cleanly installs lockfile specs.',
      status: 'pending',
      riskLevel: 'caution',
    },
  ]);

  const presetQueries = [
    'Find large log files over 100MB',
    'List all git branches merged into main',
    'Check memory and cpu usage of python processes',
  ];

  const handleRunQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    let suggested = 'ls -la';
    let explanation = 'List all directory contents with permissions.';
    let risk: 'safe' | 'caution' | 'dangerous' = 'safe';

    const q = queryText.toLowerCase();
    if (q.includes('large') || q.includes('log') || q.includes('100mb')) {
      suggested = 'find . -type f -size +100M -exec ls -lh {} +';
      explanation = 'Searches disk space for files exceeding 100 megabytes and prints human-readable sizes.';
      risk = 'safe';
    } else if (q.includes('git') || q.includes('branch')) {
      suggested = 'git branch --merged main | grep -v "main"';
      explanation = 'Filters local branches that have already been integrated into main trunk.';
      risk = 'safe';
    } else if (q.includes('python') || q.includes('cpu') || q.includes('memory')) {
      suggested = 'ps aux | grep "[p]ython" | awk \'{print $2, $3"%", $4"%", $11}\'';
      explanation = 'Extracts PID, CPU%, Memory%, and executable path for all active Python runtimes.';
      risk = 'safe';
    } else if (q.includes('delete') || q.includes('remove') || q.includes('kill')) {
      suggested = `rm -I ${q.replace(/delete|remove|kill/g, '').trim()}*`;
      explanation = 'Interactive deletion command with per-file confirmation prompt.';
      risk = 'caution';
    } else {
      suggested = `echo "[ai-helper] Synthesizing command for: ${queryText}"`;
      explanation = 'Synthesizes context-aware POSIX syntax based on local OS shell.';
      risk = 'safe';
    }

    setHistory([
      ...history,
      {
        prompt: queryText,
        suggestedCommand: suggested,
        explanation,
        status: 'pending',
        riskLevel: risk,
      },
    ]);
    setInputQuery('');
  };

  const handleConfirm = (index: number) => {
    const next = [...history];
    next[index].status = 'executed';
    setHistory(next);
  };

  const handleCancel = (index: number) => {
    const next = [...history];
    next[index].status = 'cancelled';
    setHistory(next);
  };

  return (
    <div className="w-full bg-[#111111] text-[#F5F1E8] border border-[#111111] font-mono text-xs">
      {/* Titlebar */}
      <div className="bg-[#1A1A1A] px-4 py-2.5 border-b border-[#333333] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#0047AB] inline-block" />
          <span className="text-[11px] text-[#CCCCCC] font-bold tracking-wider">
            TERMINAL_AI_HELPER // HUMAN_GUARD_ACTIVE
          </span>
        </div>
        <a
          href="https://github.com/Naipunya956"
          target="_blank"
          rel="noreferrer"
          className="text-[#999999] hover:text-white transition-colors"
          title="View on GitHub"
        >
          <Github size={13} />
        </a>
      </div>

      {/* Terminal Stream */}
      <div className="p-4 sm:p-5 space-y-4 max-h-80 overflow-y-auto">
        <div className="text-[#888888] border-b border-[#222222] pb-2 text-[11px]">
          <span className="text-[#0047AB] font-bold">●</span> GUARD_PROTOCOL: Destructive actions require human confirmation.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5 p-3 bg-[#181818] border border-[#2A2A2A]">
            <div className="flex items-start gap-2 text-[#E0E0E0]">
              <span className="text-[#0047AB] select-none font-bold">➜</span>
              <span className="font-sans">"{item.prompt}"</span>
            </div>

            <div className="p-2 bg-[#0B0B0B] border border-[#333333] text-[#0047AB] flex items-center justify-between gap-2">
              <span className="select-all break-all text-[#DCE7F5]">$ {item.suggestedCommand}</span>
              {item.riskLevel === 'caution' && (
                <span className="px-1.5 py-0.2 bg-[#0047AB] text-white text-[9px] font-bold tracking-wider">
                  CAUTION
                </span>
              )}
            </div>

            <p className="text-[11px] text-[#888888] font-sans">
              {item.explanation}
            </p>

            <div className="pt-1 flex items-center justify-between">
              {item.status === 'pending' ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleConfirm(idx)}
                    className="px-2.5 py-1 bg-[#0047AB] hover:bg-[#003380] text-white text-[10px] font-bold tracking-wider uppercase transition-all"
                  >
                    CONFIRM &amp; RUN
                  </button>
                  <button
                    onClick={() => handleCancel(idx)}
                    className="px-2.5 py-1 bg-[#262626] hover:bg-[#333333] text-[#CCCCCC] text-[10px] uppercase transition-all"
                  >
                    CANCEL
                  </button>
                </div>
              ) : item.status === 'executed' ? (
                <span className="text-[#0047AB] text-[11px] flex items-center gap-1 font-bold">
                  <ShieldCheck size={13} />
                  <span>EXECUTED SAFELY</span>
                </span>
              ) : (
                <span className="text-[#666666] text-[11px]">CANCELLED</span>
              )}
            </div>
          </div>
        ))}

        {/* Input Prompt */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRunQuery(inputQuery);
          }}
          className="flex items-center gap-2 pt-2 border-t border-[#222222]"
        >
          <span className="text-[#0047AB] font-bold select-none">$</span>
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Translate natural intent to shell syntax..."
            className="flex-1 bg-transparent text-[#F5F1E8] placeholder-[#555555] focus:outline-hidden text-xs font-mono"
          />
          <button
            type="submit"
            className="p-1 bg-[#0047AB] hover:bg-[#003380] text-white transition-all"
            title="Execute Query"
          >
            <CornerDownLeft size={12} />
          </button>
        </form>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[10px] text-[#666666]">TRY:</span>
          {presetQueries.map((pq, pIdx) => (
            <button
              key={pIdx}
              onClick={() => handleRunQuery(pq)}
              className="text-[10px] text-[#888888] hover:text-[#0047AB] bg-[#1C1C1C] px-2 py-0.5 border border-[#2B2B2B] transition-colors"
            >
              {pq}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
