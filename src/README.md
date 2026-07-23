#Minimalist Blog
A simple responsive and modern blog
built using*React, react router ,Tailwind CSSS ,and Jotai fo global state managment


#Feauters
**Home page('/') display a list of blog posts fetched from an external API("Dummy json")
**Blog details page: shows the full details of a singlepost alongwith its comment
**Create post :Allows user to add new blog posts saved locally in globalstate
**Book marks page :View all posts that have been bookmarked by the user
**Bookmark toggle: Easily add or remove any post from bookmarks across the user
 


 #tech stack
 ** frontend: react(vite)
 ** routing: react router DOM
 ** styling: tailwind CSS 
 ** staste managment : jotai
 ** API : [Dummy json posts API](https://dummyjson.com/docs/posts)


 #folder structure
 src/
├── atoms/
│   └── bookmarkAtoms.jsx    # Jotai global state atoms (bookmarks, posts)
├── components/
│   ├── BlogCard.jsx         # Card component for displaying post previews
│   ├── BlogForm.jsx         # Form component for creating new posts
│   └── Navbar.jsx           # Navigation header component
├── pages/
│   ├── BlogDetails.jsx      # Single post details and comments view
│   ├── Bookmarks.jsx        # Saved bookmarks page
│   ├── CreatePost.jsx       # Page handling new post creation
│   └── Home.jsx             # Main landing page showing all posts
├── App.jsx                  # Main application routes setup
└── main.jsx                 # Application entry point

#live post in versel
https://blog-app-kohl-three.vercel.app/

## author
Suha Endris
