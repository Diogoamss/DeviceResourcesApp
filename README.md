# Registro de Visitas Técnicas Agrícolas

Aplicativo Expo para registrar uma visita técnica com evidência fotográfica, GPS, contato e telemetria de movimento. Os registros são persistidos no dispositivo e podem ser consultados sem internet.

## Como executar

1. Instale as dependências: `npm install`
2. Inicie o Expo: `npm start`
3. Abra em um dispositivo físico com Expo Go ou execute no emulador Android.

Para testar todos os recursos nativos, use um dispositivo físico. Emuladores podem não disponibilizar câmera, contatos, GPS ou acelerômetro.

## Requisitos atendidos

- **Nível Júnior:** a câmera trata permissões negadas. Se o sistema não permitir perguntar novamente, o app explica o bloqueio e oferece o botão para abrir as configurações do aparelho.
- **Nível Pleno:** antes de fechar a auditoria, o acelerômetro coleta amostras por 800 ms, calcula o módulo vetorial em `g` e bloqueia o registro quando o pico ultrapassa **2,0g**, exibindo `Instabilidade Física Detectada`.
- **Nível Sênior:** contatos usam a API class-based do `expo-contacts`, consulta nativa por nome, páginas numeradas de 8 itens e `FlatList` virtualizada.
- **RF01:** histórico salvo em `AsyncStorage`, disponível offline.
- **RF02:** precisão do GPS em verde (<10 m), amarelo (10–30 m) ou vermelho (>30 m).
- **RNF01:** câmera, galeria, GPS, contatos e acelerômetro têm tratamento de indisponibilidade e mensagens compreensíveis.
- **RNF02:** lista virtualizada, layout fluido, botões com quebra de linha e orientação liberada para portrait/landscape.


