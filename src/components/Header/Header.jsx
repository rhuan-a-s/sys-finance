import { Plus } from "phosphor-react";

export default function Header() {
    return (
        <header className="bg-slate-200 flex justify-between items-center p-4"> { /*display: flex; em um container, os itens filhos desse container serão organizados em uma única linha, um ao lado do outro.*/}
            <div className="">
                <h1 className="font-semibold">Detalhes dos produtos</h1>
            </div>
            <div className="space-x-4 flex">
                <input
                    type="text"
                    placeholder="Pesquisar"
                    className="border border-[#118DC8] px6 py1 rounded placeholder:text-[#118DC8]"
                />
                <button className="bg-[#118DC8] text-white py-1 px-4 rounded hover:bg-[#426b7b] transition-all duration-300 flex items-center gap-2">

                    <Plus size={16} />
                    Novo produto</button>
            </div>
        </header>
    )
}