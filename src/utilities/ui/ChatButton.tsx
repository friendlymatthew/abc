export interface ChatButtonProps {
  title: string;
}

export default function ChatButton({ title }: ChatButtonProps) {
  return (
    <button className="rounded-md bg-purple-300 px-2 text-lg">
      <p className="text-center">{title}</p>
    </button>
  );
}
