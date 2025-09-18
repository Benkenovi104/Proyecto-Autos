import { Button } from "@/app/componentes/ui/button"

export function Header() {
  return (
    <header className="bg-red-500 text-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">AutoGest</h1>
            <nav className="hidden md:flex space-x-6">
              <Button variant="ghost" className="text-white hover:bg-red-600 bg-white/20 rounded-full px-6">
                Dashboard
              </Button>
              <Button variant="ghost" className="text-white hover:bg-red-600">
                Gestión de Autos
              </Button>
              <Button variant="ghost" className="text-white hover:bg-red-600">
                Gestión de Repuestos
              </Button>
              <Button variant="ghost" className="text-white hover:bg-red-600">
                Usuarios
              </Button>
              <Button variant="ghost" className="text-white hover:bg-red-600">
                Técnicos
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">admin@autogest.com</span>
            <Button variant="ghost" size="sm" className="text-white hover:bg-red-600">
              ▼
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
