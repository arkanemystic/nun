import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="markdown-renderer text-gray-100">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        components={{
          p: ({ node, ...props }) => <p className="mb-2" {...props} />,
          h1: ({ node, ...props }) => <h1 className="text-lg font-bold mb-2 text-white" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-base font-bold mb-2 text-white" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-sm font-bold mb-2 text-white" {...props} />,
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code className="bg-black/30 px-1 rounded font-mono text-sm text-gray-100" {...props} />
            ) : (
              <code {...props} />
            ),
          pre: ({ node, ...props }) => (
            <pre className="bg-[rgba(22,27,34,0.5)] rounded-md p-4 overflow-x-auto mb-2 text-sm" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-white/20 pl-4 italic text-white/70 my-2" {...props} />
          ),
          ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-2" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-2" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          table: ({ node, ...props }) => (
            <table className="border-collapse border border-white/20 mb-2 w-full" {...props} />
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-white/10" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="border border-white/20 px-2 py-1 text-left" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="border border-white/20 px-2 py-1" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
