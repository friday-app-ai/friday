import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ChatWindow() {
  return (
    <div className="flex items-center justify-center">
    <div className="flex flex-col h-[600px] w-[600px] rounded-lg shadow-lg bg-background">
      <div className="bg-primary text-primary-foreground px-4 py-3 rounded-t-lg">
        <h2 className="text-lg font-medium"></h2>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" alt="AI" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[70%]">
            <p>Hello! m an AI assistant. How can I help you today?</p>
          </div>
        </div>
        <div className="flex items-start gap-3 justify-end">
          <div className="bg-primary rounded-lg p-3 max-w-[70%] text-primary-foreground">
            <p>Hi there! I have a few questions about your services.</p>
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" alt="AI" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div className="bg-muted rounded-lg p-3 max-w-[70%]">
            <p>Sure, d be happy to answer your questions. What would you like to know?</p>
          </div>
        </div>
      </div>
      <div className="bg-muted rounded-b-lg p-3 flex items-center gap-2">
        <Textarea placeholder="Type your message..." className="flex-1 resize-none" />
        <Button>
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
    </div>
  )
}

function SendIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
