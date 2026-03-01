import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/homepage')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <><nav className="flex items-center justify-between px-6 py-4 bg-white shadow border-b border-gray-200">
      <div className="text-lg font-bold">LENDT</div>
      <img
        src="https://cdn-icons-png.flaticon.com/128/9293/9293737.png"
        alt="LENDR"
        className="h-10" />
      <button className="px-4 py-2 bg-white text-black border-2 border-black rounded hover:bg-gray-100">
        Button
      </button>
    </nav>
    
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <section className="w-full h-96 bg-cover bg-center flex items-center justify-center text-center px-6" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1695014192203-291edf9e4842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}>
          <div>
            <h2 className="text-5xl font-bold text-white mb-4">LENDT</h2>
            <p className="text-xl text-blue-100 mb-8">Anything, anywhere.</p>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-blue-50">
              Get Started
            </button>
          </div>
        </section>
      </div>

      <footer className="w-full bg-slate-950 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">LENDT</h3>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
          <div className="text-sm text-gray-400 mt-4 md:mt-0">
            © 2024 LENDT. All rights reserved.
          </div>
        </div>
      </footer>
      
      </>
    
  )   
}
