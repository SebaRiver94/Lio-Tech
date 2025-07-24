// Efecto de aparición al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.aparecer').forEach(card => {
    observer.observe(card);
});

// Filtrado de productos
document.querySelectorAll('.filtro').forEach(filtro => {
    filtro.addEventListener('change', filtrarProductos);
});

function filtrarProductos() {
    const productos = document.querySelectorAll('.product');
    const filtros = {
        marca: [],
        almacenamiento: [],
        ram: []
    };

    document.querySelectorAll('.filtro:checked').forEach(cb => {
        filtros[cb.name].push(cb.value);
    });

    productos.forEach(producto => {
        const marca = producto.dataset.marca;
        const almacenamiento = producto.dataset.almacenamiento;
        const ram = producto.dataset.ram;

        const coincideMarca = filtros.marca.length === 0 || filtros.marca.includes(marca);
        const coincideAlmacenamiento = filtros.almacenamiento.length === 0 || filtros.almacenamiento.includes(almacenamiento);
        const coincideRam = filtros.ram.length === 0 || filtros.ram.includes(ram);

        if (coincideMarca && coincideAlmacenamiento && coincideRam) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}
filtrarProductos();