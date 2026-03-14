import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";
import "./MessageBubble.css";

function UserMessage({ content }) {
  return <div className="message-bubble">{content}</div>;
}

function BotMessage({ content }) {
  return (
    <div className="message-bubble">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            const {children, className, node, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <CodeBlock className={className} {...rest}>
                {String(children).replace(/\n$/, '')}
              </CodeBlock>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            )
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