
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        }
        if(!(elemBottom <= docViewBottom)) {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*.5;
        $(MainTimelineContainer).find('.inner').css('height',MainTimelineContainerBottom+'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      Array.from(timeline).forEach(isScrollIntoView);
    });
  
  })(window.jQuery);


// BARRA DE PESQUISA

const searchInput = document.getElementById('keyword');
const resultsContainer = document.getElementById('results-container');

// Array com os dados para pesquisa (substitua pelos seus dados reais)
const data = [
  { 
      title: "Workflows{wf}", 
      content: "Acesse todos os fluxos de trabalho que orientam as operações do suporte técnico, com processos e etapas claras para garantir agilidade e eficiência.", 
      link: "workflows.html" 
  },
  { 
      title: "Controle de Clientes Homologados{wf}", 
      content: "Realizar o cadastro e ter o controle de Clientes que estão realizando a integração com a API Pix.", 
      link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Workflows/Controle%20de%20Clientes%20Homologados.docx?d=we1893f2ade104263a3507b382ea4eb4f" 
  },
  { 
      title: "Controle de Integradores Homologados{wf}", 
      content: "Realizar o cadastro e ter o controle de Integradores que estão realizando a integração com a API Pix", 
      link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Workflows/Controle%20de%20Integradores%20Homologados.docx?d=w9c3e047bb374402c86a735ee6a243893" 
  },
  { 
    title: "Workflow API PIX - Clientes - Certificado Integrador (1 - n){wf}", 
    content: "Realizar o cadastro e ter o controle de Integradores que estão realizando a integração com a API Pix", 
    link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Workflows/Controle%20de%20Integradores%20Homologados.docx?d=w9c3e047bb374402c86a735ee6a243893" 
},
{ 
  title: "Workflow API Pix - Clientes{wf}", 
  content: "Viabilizar a integração da API Pix Banrisul por clientes do segmento varejo.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Workflows/WF%20API%20PIX%20-%20Clientes.docx?d=we8666e35431242f583075dc874224148" 
},
{ 
  title: "Workflow Chave PIX e Credenciais{wf}", 
  content: "Criação de chave Pix e credenciais para acesso ao Portal do Desenvolvedor Banrisul para clientes da Unidade Comercial de Governos.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Workflows/WF%20Chave%20PIX%20e%20Credenciais.docx?d=w3e0603104d534bdb8ef5769e945bf54c" 
},
{ 
  title: "Workflow Ger. Organização/cliente/aplicação - APIM{wf}", 
  content: "Criação de chave Pix e credenciais para acesso ao Portal do Desenvolvedor Banrisul para clientes.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Workflows/WF%20Ger%20Organiza%C3%A7%C3%A3o%20cliente%20aplica%C3%A7%C3%A3o.docx?d=wff1d735eeacc48c3b9916a3f9a569a3c" 
},
{ 
  title: "WF Solicita acesso ao API Manager{wf}", 
  content: "Realizar o cadastro de colegas da TI e DG ao Portal do Desenvolvedor.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Workflows/WF%20Solicita%20acesso%20ao%20API%20Manager%20(v2).docx?d=w17cd17682d4042588a8444b55ef0f80c" 
},
{ 
  title: "Revisão de Workflows{wf}", 
  content: "Consulte as versões atualizadas dos fluxos de trabalho, com melhorias contínuas e ajustes baseados em feedbacks da equipe para otimização das tarefas.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Workflows/WF%20Solicita%20acesso%20ao%20API%20Manager%20(v2).docx?d=w17cd17682d4042588a8444b55ef0f80c" 
},
{ 
  title: "Lista de Integradores Homologados", 
  content: "Como atualizar a lista dos integradores já homologados com o Banrisul.", 
  link: "listaintegradores.html" 
},
{ 
  title: "Cadastro de Integrador - Certificado 1 - n", 
  content: "?", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Homologa%C3%A7%C3%A3o%20de%20Integradores/Cadastro%20de%20Integrador%20%E2%80%93%20Certificado%201%20-%20n.docx?d=wb4b116db22cc48fbb842429a2db30f40" 
},
{ 
  title: "Controle de Integradores Homologados{lista}", 
  content: "?", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Revis%C3%A3o%20dos%20WFs/Revis%C3%A3o%20dos%20Workflow%20API%20Pix%20-%20Clientes%20e%20Integradores.docx?d=wa07f6fe1440f4f2ab2a16e35775d8a8c" 
},
{ 
  title: "Lista de Integradores Homologados", 
  content: "?", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Homologa%C3%A7%C3%A3o%20de%20Integradores/Lista%20de%20Integradores%20Homologados.docx?d=wf1d1e6da8b444f5c8589b060e9512b25" 
},
{ 
  title: "Glossário de APIs", 
  content: "Definições e explicações detalhadas sobre as APIs utilizadas no suporte técnico. Entenda o propósito e como usar cada ferramenta de integração.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Gloss%C3%A1rio%20APis/Gloss%C3%A1rio%20APis.docx?d=we141f9019f354b9783189022163a25df" 
},
{ 
  title: "E-mails Padronizados", 
  content: "Modelos de e-mails prontos para facilitar a comunicação com clientes e outros departamentos, mantendo consistência e profissionalismo nas mensagens enviadas.", 
  link: "emailspadrao.html" 
},
{ 
  title: "Regras para o envio de e-mail de boas-vindas", 
  content: "Quando devo enviar cada e-mail?", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/Regras%20envio%20de%20e-mail%20de%20boas%20vindas.docx?d=wc604348f7c6a4b4c996441816af5b537" 
},
{ 
  title: "E-mail de Boas-Vindas API PIX - Cliente com Integrador Homologado - solicitação via e-mail", 
  content: "Envio de e-mail de boas-vindas ao cliente.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/E-mail%20%20de%20Boas-Vindas%20API%20PIX%20-%20Cliente%20com%20Integrador%20Homologado%20-%20solicita%C3%A7%C3%A3o%20via%20e-mail.docx?d=wd6a3dd1942f64f4382e6d4a1052e02f9" 
},
{ 
  title: "E-mail de Boas-Vindas API PIX - Cliente com Integrador Não Homologado - solicitação via e-mail", 
  content: "Envio de e-mail de boas-vindas ao cliente.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/E-mail%20de%20Boas-Vindas%20API%20PIX%20-%20Cliente%20com%20Integrador%20N%C3%A3o%20Homologado%20-%20solicita%C3%A7%C3%A3o%20via%20e-mail.docx?d=w08bdb58cda844915a983bde2867a1d4c" 
},
{ 
  title: "E-mail de Boas-Vindas API PIX - Certificado único", 
  content: "Envio de e-mail de boas-vindas ao cliente.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/E-mail%20%20de%20Boas-Vindas%20API%20PIX%20-%20Certificado%20%C3%BAnico.docx?d=wc630002ab05c4f9c9176278b412f5f78" 
},
{ 
  title: "E-mail de boas-vindas padrão – Cliente com Integrador Homologado - solicitação via WF", 
  content: "Envio de e-mail de boas-vindas ao cliente.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/E-mail%20de%20boas-vindas%20padr%C3%A3o%20%E2%80%93%20Cliente%20com%20Integrador%20Homologado%20-%20solicita%C3%A7%C3%A3o%20via%20WF.docx?d=w9e95dcd31f664d9da9d9793cb31f1e1d" 
},
{ 
  title: "E-mail de boas-vindas padrão – Cliente com Integrador Não Homologado - solicitação via WF", 
  content: "Envio de e-mail de boas-vindas ao cliente.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/E-mail%20de%20boas-vindas%20padr%C3%A3o%20%E2%80%93%20Cliente%20com%20Integrador%20N%C3%A3o%20Homologado%20-%20solicita%C3%A7%C3%A3o%20via%20WF.docx?d=wd1c92525dc924d0bb15842c3606ddc3d" 
},
{ 
  title: "E-mail de finalização de cadastro", 
  content: "Envio de e-mail contendo as credenciais para acesso à API.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/E-mail%20de%20finaliza%C3%A7%C3%A3o%20de%20cadastro.docx?d=w633a406cdb5b4d76a5d7670a9278834e" 
},
{ 
  title: "E-mail de testes para o ambiente de homologação", 
  content: "Envio de e-mail de testes contendo a documentação técnica para a homologação.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/E-mail%20de%20testes%20para%20o%20ambiente%20de%20homologa%C3%A7%C3%A3o.docx?d=w276723992767463fb1bf5fbfea4a74a2" 
},
{ 
  title: "Enviar instruções das credenciais e certificado mTLS API PIX", 
  content: "Envio das instruções para acesso ao Portal do Desenvolvedor e certificado mTLS.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/Enviar%20instru%C3%A7%C3%B5es%20das%20credenciais%20e%20certificado%20mTLS%20API%20PIX.docx?d=wa745f2501be743c8bd664c5500e53637" 
},
{ 
  title: "Mensagem padrão de QR Code não liquidado", 
  content: "Envio de e-mail de QR Code não liquidado.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/E-mails%20Padronizados/Mensagem%20padr%C3%A3o%20de%20QR%20Code%20n%C3%A3o%20liquidado.docx?d=w017c5b1621ed40709faceeeb01ea7acc" 
},
{ 
  title: "Relatório das Demandas", 
  content: "Elaborar e atualizar o relatório mensal de demandas da caixa de e-mail.", 
  link: "relatoriodemandas.html" 
},
{ 
  title: "Controle de Demandas", 
  content: "Como controlar e atualizar o relatório mensal de demandas da caixa de e-mail.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Relat%C3%B3rios/Relat%C3%B3rio%20de%20Suporte%20T%C3%A9cnico.docx?d=w58847f611a4347d6b97489e2de126bc6" 
},
{ 
  title: "Planilha de Demandas", 
  content: "Onde atualizar o relatório mensal de demandas da caixa de e-mail.", 
  link: "search-ms:crumb=&crumb=location:search-ms:displayname=Resultados%20da%20Pesquisa%20em%20Governan%C3%A7a&crumb=location:I:\Inovacao-Financeira-GIC\GIC\Governan%C3%A7a\Relat%C3%B3rios\Demandas da Caixa de e-mail da GIC" 
},
{ 
  title: "FAQs", 
  content: "Perguntas frequentes com respostas claras e diretas. Aqui, você encontra soluções para dúvidas comuns e resolve problemas de forma rápida e eficiente.", 
  link: "faqs.html" 
},
{ 
  title: "FAQ - APIs Banrisul", 
  content: "?", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/FAQs/FAQ%20-%20APIs%20Banrisul.docx?d=wc87b77f2fc0f4bdd8ec66450f0c60c78" 
},
{ 
  title: "FAQ - API Pix Comercial", 
  content: "?", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/FAQs/FAQ%20-%20API%20Pix%20Comercial.docx?d=w549940fa9b214d7bb6123ef61159d1e9" 
},
{ 
  title: "FAQ - API Pix mTLS", 
  content: "?", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/FAQs/FAQ%20-%20API%20Pix%20mTLS.docx?d=w63c7810094f94ac0b30c62df53baaf04" 
},
{ 
  title: "FAQ - Outras Dúvidas", 
  content: "?", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/FAQs/FAQ%20-%20Outras%20D%C3%BAvidas.docx?d=w5b398ec71be947e683e63fe366786659" 
},
{ 
  title: "FAQ - Portal do Desenvolvedor", 
  content: "?", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/FAQs/FAQ%20-%20Portal%20do%20Desenvolvedor.docx?d=wbc1ac7eea67449e9aacb1e12733084fa" 
},
{ 
  title: "Instruções Comerciais{ICs}", 
  content: "?", 
  link: "ics.html" 
},
{ 
  title: "IC - Extinção do Workflow de Integradores", 
  content: "2025-01", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/ICs/2025-01%20-%20IC%20-%20%20Extin%C3%A7%C3%A3o%20do%20Workflow%20de%20Integradores.docx?d=wb4ff554d00664decb29f663dbe25e236" 
},
{ 
  title: "IC - Solução LINX", 
  content: "2024-11", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/ICs/2024-11%20-%20Solu%C3%A7%C3%A3o%20LINX.docx?d=w0291f35cc40f4c76b4f5ad61af7b98e4" 
},
{ 
  title: "IC - Integradores Homologados", 
  content: "2024-09", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/ICs/2024-09%20-IC-Integradores%20Homologados.docx?d=w150ae870c0b043bbbc1d6bbc326cd197" 
},
{ 
  title: "IC - API Pix", 
  content: "2024-07", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/ICs/2024-07%20-%20IC%20API%20Pix.docx?d=w0341dce4825b47a5884c03e5c05fac11" 
},
{ 
  title: "IC - Dúvidas", 
  content: "2024-07", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/ICs/IC%20-%20D%C3%BAvidas.docx?d=w5fd9e487beb0449fb281fc4dd29946fa" 
},
{ 
  title: "Relatório de Suporte Técnico", 
  content: "Relatório detalhado sobre o desempenho do suporte técnico, com métricas, análises de incidentes e evolução de atendimentos. Acompanhe a qualidade e produtividade da equipe.", 
  link: "relatoriosuporte.html" 
},
{ 
  title: "Relatórios Gerais", 
  content: "Relatórios globais sobre todas as operações e atividades da equipe. Informações estratégicas que ajudam na tomada de decisões e no acompanhamento dos objetivos.", 
  link: "relatoriosgerais.html" 
},
{ 
  title: "Coleta de Dados", 
  content: "Ferramentas e processos para coleta e análise de dados essenciais. Melhore o diagnóstico e a tomada de decisões com dados precisos e atualizados.", 
  link: "coletadados.html" 
},
{ 
  title: "Portal do Desenvolvedor", 
  content: "Como publicar conteúdos.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Publica%C3%A7%C3%A3o%20de%20Conte%C3%BAdos/Publicador%20CMS%20-%20Publica%C3%A7%C3%A3o%20de%20Conte%C3%BAdo.docx?d=wc905816936d045ddaf2a9600d272b098" 
},
{ 
  title: "Painel para Suporte Técnico", 
  content: "Como atualizar as informações no Painel de Suporte Técnico da GIC.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Publica%C3%A7%C3%A3o%20de%20Conte%C3%BAdos/Processo%20Atualiza%C3%A7%C3%A3o%20de%20Conte%C3%BAdos%20Painel%20para%20Suporte%20T%C3%A9cnico.docx?d=w9fe0252c1cc643eaaf9d10b2c3b1d14a" 
},
{ 
  title: "Sharepoint", 
  content: "Como utilizar o Sharepoint para criar formulários.", 
  link: "http://sharepoint/sites/bfju62/g01/PainelSuporteTecnico/Publica%C3%A7%C3%A3o%20de%20Conte%C3%BAdos/Manual%20de%20uso%20-%20Formul%C3%A1rio%20SharePoint.docx?d=w91cb2e49b48b4d819c6f8b615af9751b" 
},
  // Adicione mais itens aqui...
];


// Função para filtrar os resultados
function filterResults(query) {
    const filteredResults = data.filter(item => {
        return item.title.toLowerCase().includes(query) ||
               item.content.toLowerCase().includes(query);
    });

    // Limpa os resultados anteriores
    resultsContainer.innerHTML = '';

    // Exibe os resultados filtrados
    if (filteredResults.length > 0) {
        filteredResults.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.classList.add('result');
            resultElement.innerHTML = `
                <h3><a href="${result.link}">${result.title}</a></h3>
                <p>${result.content}</p>
            `;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = "Nenhum resultado encontrado.";
        resultsContainer.appendChild(noResultsElement);
    }
  }


// Adiciona um evento de entrada de texto ao campo de pesquisa
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    filterResults(query);
});
