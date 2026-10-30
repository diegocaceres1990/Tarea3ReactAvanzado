import { useReducer, useRef, useState } from 'react'
import './App.css'
import { CompositionPanel } from './components/CompositionPanel'
import { GenericCatalog } from './components/GenericCatalog'
import { KitSummary } from './components/KitSummary'
import { SearchBox, type SearchBoxHandle } from './components/SearchBox'
import { digitalResources, materials } from './data'
import { initialKitState, kitReducer } from './kitReducer'

function App() {
  const [query, setQuery] = useState("");
  const [kit, dispatch] = useReducer(kitReducer, initialKitState);
  const searchRef = useRef<SearchBoxHandle>(null);

  const text = query.toUpperCase();
  const visibleMaterials = materials.filter((material) => material.name.toUpperCase().includes(text));
  const visibleResources = digitalResources.filter((resource) => resource.title.toUpperCase().includes(text));

  return (
    <>
      <h1>Maletin de salida</h1>

      <SearchBox ref={searchRef} value={query} onChange={setQuery} />
      <button type="button" onClick={() => searchRef.current?.focus()}>
        Enfocar buscador
      </button>

      <CompositionPanel header={<h2>Materiales</h2>}>
        <p>Materiales fisicos que se pueden llevar a la visita.</p>
        <GenericCatalog
          items={visibleMaterials}
          getKey={(material) => material.id}
          getLabel={(material) => `${material.name} - cantidad: ${material.quantity}`}
          onSelect={(material) =>
            dispatch({ type: "add", item: { source: "material", key: material.id, name: material.name, item: material } })
          }
        />
      </CompositionPanel>

      <CompositionPanel
        header={<h2>Recursos digitales</h2>}
        footer={
          <button type="button" onClick={() => setQuery("")}>
            Limpiar busqueda
          </button>
        }
      >
        <GenericCatalog
          items={visibleResources}
          getKey={(resource) => resource.code}
          getLabel={(resource) => `${resource.title} - ${resource.format}`}
          onSelect={(resource) =>
            dispatch({ type: "add", item: { source: "digital", key: resource.code, name: resource.title, item: resource } })
          }
        />
      </CompositionPanel>

      <KitSummary
        items={kit.items}
        status={kit.status}
        message={kit.message}
        onRemove={(key) => dispatch({ type: "remove", key })}
        onMarkReviewed={() => dispatch({ type: "markReviewed" })}
        onReset={() => dispatch({ type: "reset" })}
      />

      <section>
        <h2>Instrucciones</h2>
        <ul>
          <li>Escriba en el buscador para filtrar los catalogos.</li>
          <li>Pulse "Agregar" para incorporar un elemento al maletin.</li>
          <li>Pulse "Marcar como revisado" cuando el maletin este listo.</li>
          <li>Pulse "Reiniciar maletin" para empezar de nuevo.</li>
        </ul>
      </section>
    </>
  )
}

export default App
