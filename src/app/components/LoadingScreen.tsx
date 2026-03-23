import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gray-950 z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          className="mb-8"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="inline-block p-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl">
            <Code2 size={48} className="text-white" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Jasmith Joga
        </motion.h1>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}% Loading...
        </motion.p>

        {/* Terminal-like Loading Text */}
        <motion.div
          className="mt-8 font-mono text-xs text-cyan-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p>$ initializing portfolio...</p>
          <p>$ loading components...</p>
          <p>$ preparing awesome experience...</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
