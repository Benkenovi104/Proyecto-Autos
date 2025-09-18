import { CarOperationsTable } from "@/app/componentes/car-operations-table"
import { Header } from "@/app/componentes/header"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <CarOperationsTable />
      </main>
    </div>
  )
}
