declare namespace App {
  interface Link{
    id: string
    url: string
    description: string
    postedBy: User
    votes: Vote[]
  }

  interface User{
    id: string
    name: string
    email: string
  }

  interface Vote{
    id: string
    user: User
    link: Link
    createdAt: string
  }
}








