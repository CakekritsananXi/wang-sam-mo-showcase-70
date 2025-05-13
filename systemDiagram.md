
# System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client Browser                           │
└───────────────────────────────┬─────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                     React Frontend (Vite)                       │
│                                                                 │
│  ┌─────────────────────────┐      ┌──────────────────────────┐  │
│  │       Components        │      │         Hooks            │  │
│  │  ├─ Navbar             │      │  ├─ useSupabaseStatus    │  │
│  │  ├─ HeroSection        │      │  ├─ useToast             │  │
│  │  ├─ ProjectCard        │      │  └─ useMobile            │  │
│  │  ├─ GalleryGrid        │      │                          │  │
│  │  ├─ TeamMember         │      └──────────────────────────┘  │
│  │  ├─ ContactForm        │                                     │
│  │  ├─ Footer             │      ┌──────────────────────────┐  │
│  │  ├─ SocialMediaBar     │      │      React Router        │  │
│  │  ├─ SupabaseStatus     │      │                          │  │
│  │  └─ StatsCard          │      │  ├─ /                    │  │
│  │                         │      │  ├─ /projects           │  │
│  └─────────────────────────┘      │  ├─ /gallery            │  │
│                                   │  ├─ /team               │  │
│  ┌─────────────────────────┐      │  ├─ /contact            │  │
│  │      UI Library         │      │  └─ * (404)             │  │
│  │    (shadcn/ui)          │      │                          │  │
│  └─────────────────────────┘      └──────────────────────────┘  │
│                                                                 │
└─────────────────────────────┬─────────────────────────────────┘
                              │
                              │  Supabase SDK
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        Supabase Backend                         │
│                                                                 │
│  ┌─────────────────────────┐      ┌──────────────────────────┐  │
│  │   PostgreSQL Database   │      │      Authentication      │  │
│  │  ├─ contact_submissions │      │                          │  │
│  │  ├─ lovable_dev_prompts │      │  (Not Fully Implemented) │  │
│  │  └─ user_profiles       │      │                          │  │
│  │                         │      │                          │  │
│  └─────────────────────────┘      └──────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────────┐      ┌──────────────────────────┐  │
│  │        Storage          │      │     Edge Functions       │  │
│  │                         │      │                          │  │
│  │  (Not Fully Implemented)│      │  (Not Fully Implemented) │  │
│  │                         │      │                          │  │
│  └─────────────────────────┘      └──────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

```

## Description

The application follows a client-server architecture with Supabase serving as the backend service.

### Frontend (Client-Side)

- **React Application**: Built with Vite and TypeScript
  - **Pages**: Main routes of the application (Home, Projects, Gallery, Team, Contact)
  - **Components**: Reusable UI elements
  - **Hooks**: Custom hooks for state management and logic
  - **UI Library**: shadcn/ui components for consistent design

- **State Management**: 
  - Local state with React hooks
  - React Query for server state (if implemented)

- **Routing**: 
  - React Router DOM for client-side navigation

### Backend (Supabase)

- **Database**: PostgreSQL database with tables for contact submissions, user data, etc.
- **Authentication**: User authentication system (not fully implemented yet)
- **Storage**: File storage for images and media (not fully implemented yet)
- **Edge Functions**: Serverless functions for backend logic (not fully implemented yet)

### Data Flow

1. User interacts with React components in the browser
2. Components use hooks to manage state and perform actions
3. Data requests are made to Supabase via the client SDK
4. Supabase processes requests and returns data to the frontend
5. UI updates to reflect the new data state

### Connection Monitoring

The application includes a Supabase connection status component that monitors the health of the database connection:

- Displays connection state (connecting, connected, error)
- Provides reconnection capability
- Shows toast notifications for connection events

## Future Implementation Suggestions

1. **Authentication Flow**: Implement complete user authentication
2. **Storage Integration**: Set up storage buckets for user uploads and media
3. **Edge Functions**: Create serverless functions for backend operations
4. **Real-time Subscriptions**: Implement Supabase real-time capabilities for live updates

## Architecture Decisions

- **Single-Page Application**: For better user experience and smoother transitions
- **Backend-as-a-Service**: Using Supabase eliminates need for custom server infrastructure
- **Component-Based Structure**: For reusability and maintainability
- **TypeScript**: For type safety and better developer experience
