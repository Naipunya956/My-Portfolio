import React, { useState } from 'react';
import { Sparkles, RefreshCw, Github } from 'lucide-react';

export const InteractiveCheerleader: React.FC = () => {
  const [mood, setMood] = useState<'stuck' | 'tired' | 'overwhelmed' | 'excited' | 'curious'>('stuck');
  const [cheer, setCheer] = useState<string>(
    "Every hard bug is just a puzzle waiting to click. Take a deep breath — you've solved 100% of your hardest problems so far."
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const moodCheers: Record<string, string[]> = {
    tired: [
      "Resting is part of the engineering cycle. Even compilers take a break before the next build.",
      "You've been giving it your all. Celebrate the lines of code and logic you conquered today.",
      "Progress isn't just commits; it's also recharging so your brain can find the next breakthrough."
    ],
    stuck: [
      "Every hard bug is just a puzzle waiting to click. Take a deep breath — you've got this.",
      "Rubber-ducking time! Explain the problem out loud. The cleanest solution usually hides in plain sight.",
      "The best engineers spend 80% of their time stuck and 20% writing magic. You are right in the zone."
    ],
    excited: [
      "That spark of curiosity is your greatest builder superpower! Ride this creative momentum.",
      "Building something new feels incredible. Let's turn that excitement into clean, working code.",
      "Awesome momentum. Make sure to commit your changes while the inspiration is flowing."
    ],
    overwhelmed: [
      "Break it down into the smallest possible function. Solve just one line first.",
      "You don't have to build the whole world today. Just lay one solid brick at a time.",
      "Step back for five minutes. Look at how far you've already come from day one."
    ],
    curious: [
      "Curiosity is where the best systems are born. Dive down that rabbit hole and see what you uncover.",
      "Wondering 'how does this actually work under the hood?' is the hallmark of a true engineer.",
      "Experiment freely — breaking things in a sandbox is the fastest way to master them."
    ]
  };

  const handleGenerate = (selectedMood: typeof mood = mood) => {
    setIsGenerating(true);
    setTimeout(() => {
      const list = moodCheers[selectedMood] || moodCheers.stuck;
      const randomCheer = list[Math.floor(Math.random() * list.length)];
      setCheer(randomCheer);
      setIsGenerating(false);
    }, 280);
  };

  return (
    <div className="w-full bg-[#F5F1E8] border border-[#111111]/25 text-[#111111] font-mono text-xs">
      {/* Editorial Titlebar */}
      <div className="bg-[#111111] text-[#F5F1E8] px-4 py-2.5 flex items-center justify-between border-b border-[#111111]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-[#0047AB] inline-block" />
          <span className="font-bold tracking-wider text-[11px]">
            POCKET_CHEERLEADER // GEMINI_CLIENT
          </span>
        </div>
        <a
          href="https://github.com/Naipunya956/Pocket_Cheerleader"
          target="_blank"
          rel="noreferrer"
          className="text-[#F5F1E8]/70 hover:text-white transition-colors"
          title="View GitHub Repository"
        >
          <Github size={13} />
        </a>
      </div>

      {/* Interactive App Window */}
      <div className="p-5 sm:p-6 space-y-5">
        {/* Mood Selector Buttons */}
        <div>
          <label className="block text-[10px] uppercase tracking-wider text-[#111111]/50 mb-2 font-bold">
            Select Energy State:
          </label>
          <div className="flex flex-wrap gap-2">
            {(['stuck', 'tired', 'overwhelmed', 'excited', 'curious'] as const).map((m) => (
              <button
                key={m}
                onClick={() => {
                  setMood(m);
                  handleGenerate(m);
                }}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                  mood === m
                    ? 'bg-[#111111] text-[#F5F1E8] border-[#111111] font-bold'
                    : 'bg-transparent text-[#111111] border-[#111111]/25 hover:border-[#0047AB] hover:text-[#0047AB]'
                }`}
              >
                [{m}]
              </button>
            ))}
          </div>
        </div>

        {/* Live Affirmation Dialogue Box */}
        <div className="p-4 bg-white/60 border border-[#111111]/20 relative">
          <div className="flex items-start gap-3">
            <span className="text-[#0047AB] font-bold text-sm select-none">➜</span>
            <div className="space-y-1 pr-6">
              <span className="text-[10px] text-[#111111]/40 uppercase tracking-widest block font-bold">
                AFFIRMATION SYNTHESIS
              </span>
              <p className={`text-xs sm:text-sm text-[#111111] font-sans leading-relaxed transition-opacity ${isGenerating ? 'opacity-30' : 'opacity-100'}`}>
                "{cheer}"
              </p>
            </div>
          </div>

          <button
            onClick={() => handleGenerate()}
            disabled={isGenerating}
            className="absolute top-3 right-3 p-1 text-[#111111]/50 hover:text-[#0047AB] transition-colors"
            title="Generate new cheer"
          >
            <RefreshCw size={13} className={isGenerating ? 'animate-spin' : ''} />
          </button>
        </div>

        {/* Technical Footer */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#111111]/10 text-[11px] text-[#111111]/60">
          <span>STREAM_SYNTHESIS: ACTIVE</span>
          <span className="text-[#0047AB] font-bold">GEMINI_API_READY</span>
        </div>
      </div>
    </div>
  );
};
