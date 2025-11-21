import React, { useState } from 'react';
import { Sparkles, Bot, Loader2, Copy, Check } from 'lucide-react';
import { generateCreativeConcept } from '../services/geminiService';
import { DesignConceptResponse } from '../types';

const AiAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<DesignConceptResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setResult(null);
    
    try {
      const data = await generateCreativeConcept(prompt);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    const text = `Concept: ${result.concept}\nStyle: ${result.visualStyle}\nTagline: ${result.tagline}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-concept" className="py-20 bg-gray-900 relative overflow-hidden border-t border-gray-800">
      {/* Background Tech Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(129,140,248,0.05)_25%,rgba(129,140,248,0.05)_26%,transparent_27%,transparent_74%,rgba(129,140,248,0.05)_75%,rgba(129,140,248,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(129,140,248,0.05)_25%,rgba(129,140,248,0.05)_26%,transparent_27%,transparent_74%,rgba(129,140,248,0.05)_75%,rgba(129,140,248,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
             <Bot className="w-8 h-8 text-cyan-400" />
             <span className="text-cyan-400 font-bold tracking-widest">AI ARCHITECT</span>
          </div>
          <h2 className="text-4xl font-black text-white font-anime-title mb-4">
            NEED A <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SPARK?</span>
          </h2>
          <p className="text-gray-400">
            Describe your project briefly, and let our Wolf AI generate a high-energy creative concept for you.
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-sm border border-purple-500/30 p-6 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.15)]">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., A gaming video thumbnail for a horror game..."
              className="flex-grow bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className={`px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                loading || !prompt.trim()
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white shadow-lg hover:shadow-purple-500/25'
              }`}
            >
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {loading ? 'PROCESSING...' : 'GENERATE'}
            </button>
          </div>

          {result && (
            <div className="mt-8 space-y-6 animate-fade-in">
              <div className="border-l-2 border-cyan-400 pl-4 py-2 bg-cyan-900/10">
                <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">Concept</h4>
                <p className="text-white text-lg font-medium">{result.concept}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-2 border-purple-400 pl-4 py-2 bg-purple-900/10">
                  <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">Visual Style</h4>
                  <p className="text-gray-300 text-sm">{result.visualStyle}</p>
                </div>
                <div className="border-l-2 border-yellow-400 pl-4 py-2 bg-yellow-900/10">
                  <h4 className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">Tagline</h4>
                  <p className="text-white italic font-comic text-xl tracking-wide">"{result.tagline}"</p>
                </div>
              </div>

              <button 
                onClick={copyToClipboard}
                className="mt-4 text-xs flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                {copied ? 'COPIED TO CLIPBOARD' : 'COPY CONCEPT'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiAssistant;