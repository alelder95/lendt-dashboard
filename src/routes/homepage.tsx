import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/homepage')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
  <><nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="text-lg font-bold">LENDT</div>
      <img
        src="https://cdn-icons-png.flaticon.com/128/9293/9293737.png"
        alt="LENDR"
        className="h-10" />
      <button className="px-4 py-2 bg-white text-black border-2 border-black rounded hover:bg-gray-100">
        Button
      </button>
    </nav><div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center">
        <section className="w-full h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-5xl font-bold text-white mb-4">Welcome to LENDT</h2>
            <p className="text-xl text-blue-100 mb-8">Your lending solution starts here</p>
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-blue-50">
              Get Started
            </button>
          </div>
        </section>
      </div>
      
      </>
    
  )   
}
