import { useState } from "react";


export default function VerDataNasc() {

    //Criar um State que armazene a data de nascimento do usuário que ele irá digitar no input. O State deve ser do tipo string.

    const [dataNascimento, setDataNascimento] = useState<string>("");

    //Formatar a data de nascimento do usuário para o formato DD/MM/AAAA e exibir na tela. O usuário irá digitar a data no input do tipo date. A data deve ser armazenada em um State do tipo string.

    const [dataFormatada, setDataFormatada] = useState<string | null>(null);

    // Função para formatar a data
    function formatarData(data: string) {
        // Cria o objeto de data corrigindo o fuso horário (trocando - por /)
        const dataObjeto = new Date(data.replace(/-/g, '/'));
<<<<<<< HEAD
            setDataFormatada(new Intl.DateTimeFormat('pt-BR').format(dataObjeto));
=======
        setDataFormatada(new Intl.DateTimeFormat('pt-BR').format(dataObjeto));
>>>>>>> 8ab1e0f2411f0dcb9b238c9cda3ac440492ecd2a
        // Formata para o padrão brasileiro (pt-BR)
        return new Intl.DateTimeFormat('pt-BR').format(dataObjeto);
    }


<<<<<<< HEAD
  return (
    <div>
        <h2>Ver Data de Nascimento</h2>
        <input type="date" value={dataNascimento} onChange={(e) => { setDataNascimento(e.target.value); formatarData(e.target.value); }} />
        <p>Data de Nascimento: {dataFormatada}</p>
    </div>
  )
}

=======
    return (
        <div>
            <h2>Ver Data de Nascimento</h2>
            <input type="date" value={dataNascimento} onChange={(e) => { setDataNascimento(e.target.value); formatarData(e.target.value); }} />
            <p>Data de Nascimento: {dataFormatada}</p>
        </div>
    )
}
>>>>>>> 8ab1e0f2411f0dcb9b238c9cda3ac440492ecd2a
