export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
      </div>
    </div>
  );
} 