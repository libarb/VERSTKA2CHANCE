document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const productItems = productList ? productList.querySelectorAll('.product-item') : [];
    const mainFilterButtons = document.querySelectorAll('.product-filters button');
    const categoryFilterLinks = document.querySelectorAll('.category-filters a');

    let activeMainFilter = 'all';
    let activeCategoryFilter = 'all';

    function filterProducts() {
        productItems.forEach(item => {
            const itemMainFilter = item.getAttribute('data-filter');
            const itemCategory = item.getAttribute('data-category');

            const isMainMatch = activeMainFilter === 'all' || itemMainFilter === activeMainFilter;
            const isCategoryMatch = activeCategoryFilter === 'all' || itemCategory === activeCategoryFilter;

            if (isMainMatch && isCategoryMatch) {
                item.classList.remove('hidden');
                item.style.display = 'block'; 
            } else {
                item.classList.add('hidden');
                item.style.display = 'none'; 
            }
        });
    }

    mainFilterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            activeMainFilter = e.target.getAttribute('data-filter');
            
            mainFilterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            filterProducts();
        });
    });

    categoryFilterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            activeCategoryFilter = e.target.getAttribute('data-filter');

            categoryFilterLinks.forEach(lnk => lnk.classList.remove('active'));
            e.target.classList.add('active');

            filterProducts();
        });
    });


    const forms = document.querySelectorAll('.needs-validation');
    
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        }, false);
      });

});