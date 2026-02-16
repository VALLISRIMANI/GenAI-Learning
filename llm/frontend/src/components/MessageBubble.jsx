import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";
import "./MessageBubble.css";

function UserMessage({ content }) {
  return <div className="user-message">{content}</div>;
}

function BotMessage({ content }) {
  return (
    <div className="bot-message">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({node, inline, className, children, ...props}) {
            return inline ? (
              <code className={className} {...props}>{children}</code>
            ) : (
              <CodeBlock className={className} {...props}>{children}</CodeBlock>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default function MessageBubble({ role, content }) {
  return role === "user"
    ? <UserMessage content={content} />
    : <BotMessage content={content} />;
}