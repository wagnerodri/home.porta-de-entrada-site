        function toggleSubmenu(event) {
            event.preventDefault(); // Evita que a página role para o topo
            let dropdown = event.target.parentElement;
            
            // Fecha todos os submenus antes de abrir o atual
            document.querySelectorAll(".dropdown").forEach(item => {
                if (item !== dropdown) {
                    item.classList.remove("active");
                }
            });
        
            dropdown.classList.toggle("active"); // Ativa ou desativa o submenu clicado
        }
        
        let currentIndex = 0;

        const images = document.querySelectorAll('.image-carousel .col-3');
        const dots = document.querySelectorAll('.navigation-dots .dot');
        const carouselContainer = document.querySelector('.carousel-container');
        
        // Função para mudar a imagem
        function changeImage(index) {
            // Atualiza o índice da imagem
            currentIndex = index;
        
            // Move o carrossel para a imagem selecionada
            carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
            // Atualiza os pauzinhos, destacando o ativo
            dots.forEach((dot, i) => {
                dot.classList.remove('active');
                // Verifica se o índice corresponde ao ponto atual
                if (i === currentIndex) {
                    dot.classList.add('active');
                    // Altera a cor do ponto para laranja
                    dot.style.backgroundColor = "#ff7f00";  // Cor laranja
                } else {
                    dot.style.backgroundColor = "";  // Remove a cor do ponto não ativo
                }
            });
        }

        document.addEventListener("DOMContentLoaded", function () {
            const hamburgerIcon = document.getElementById("hamburger-icon");
            const menuItens = document.getElementById("MenuItens");
        
            // Quando o ícone de hambúrguer for clicado, alterna a visibilidade do menu
            hamburgerIcon.addEventListener("click", function () {
                menuItens.classList.toggle("show");
            });
        
            // Fecha o menu ao clicar fora dele
            document.addEventListener("click", function (event) {
                if (!menuItens.contains(event.target) && !hamburgerIcon.contains(event.target)) {
                    menuItens.classList.remove("show");
                }
            });
        
            // Função para alternar a visibilidade do submenu
            function toggleSubmenu(event) {
                event.preventDefault(); // Impede o redirecionamento do link
                const submenu = event.target.nextElementSibling;
        
                if (submenu && submenu.classList.contains("submenu")) {
                    submenu.classList.toggle("show");
                }
            }
        
            // Associar a função de alternância de submenu aos links do menu
            const submenuLinks = document.querySelectorAll('.dropdown > a');
            submenuLinks.forEach((link) => {
                link.addEventListener('click', toggleSubmenu);
            });
        });
        
        
        
        