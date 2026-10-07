// Datos de ejemplo (ficticios) para probar el flujo de compra
export const cop = (n) => '$' + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const RESTAURANTES = [
  { id: 'kfc', nombre: 'KFC', tipo: 'Pollo frito', icono: '🍗', color: '#d4141c', tiempo: '25-35 min', menu: [
    { id: 'kfc1', nombre: 'Combo pollo crispy 3 piezas', precio: 24500, icono: '🍗' },
    { id: 'kfc2', nombre: 'Balde de 8 piezas', precio: 52900, icono: '🍗' },
    { id: 'kfc3', nombre: 'Alitas BBQ x6', precio: 17900, icono: '🍖' },
    { id: 'kfc4', nombre: 'Gaseosa', precio: 4500, icono: '🥤' } ] },
  { id: 'mc', nombre: "McDonald's", tipo: 'Hamburguesas', icono: '🍔', color: '#e51b24', tiempo: '20-30 min', menu: [
    { id: 'mc1', nombre: 'Combo Big Mac', precio: 28900, icono: '🍔' },
    { id: 'mc2', nombre: 'McPollo', precio: 19900, icono: '🍔' },
    { id: 'mc3', nombre: 'Papas medianas', precio: 8500, icono: '🍟' },
    { id: 'mc4', nombre: 'Malteada', precio: 9900, icono: '🥤' } ] },
  { id: 'bk', nombre: 'Burger King', tipo: 'Hamburguesas', icono: '🍔', color: '#e4572e', tiempo: '25-40 min', menu: [
    { id: 'bk1', nombre: 'Combo Whopper', precio: 29900, icono: '🍔' },
    { id: 'bk2', nombre: 'Cheeseburger', precio: 12900, icono: '🍔' },
    { id: 'bk3', nombre: 'Aros de cebolla', precio: 8900, icono: '🧅' },
    { id: 'bk4', nombre: 'Gaseosa', precio: 4500, icono: '🥤' } ] },
  { id: 'dom', nombre: "Domino's", tipo: 'Pizza', icono: '🍕', color: '#1b5eab', tiempo: '30-45 min', menu: [
    { id: 'dom1', nombre: 'Pizza personal', precio: 16900, icono: '🍕' },
    { id: 'dom2', nombre: 'Pizza mediana', precio: 36900, icono: '🍕' },
    { id: 'dom3', nombre: 'Pan de ajo', precio: 9900, icono: '🥖' },
    { id: 'dom4', nombre: 'Gaseosa 1.5 L', precio: 7500, icono: '🥤' } ] },
  { id: 'bam', nombre: 'Empanadas Bambi', tipo: 'Empanadas', icono: '🥟', color: '#d9903f', tiempo: '15-25 min', menu: [
    { id: 'bam1', nombre: 'Empanada de carne', precio: 3500, icono: '🥟' },
    { id: 'bam2', nombre: 'Empanada de pollo', precio: 3500, icono: '🥟' },
    { id: 'bam3', nombre: 'Combo 6 empanadas', precio: 18900, icono: '🥟' },
    { id: 'bam4', nombre: 'Jugo natural', precio: 5500, icono: '🧃' } ] },
  { id: 'ita', nombre: 'Italianisimo', tipo: 'Pastas', icono: '🍝', color: '#2e7d32', tiempo: '30-40 min', menu: [
    { id: 'ita1', nombre: 'Lasaña de carne', precio: 26900, icono: '🍝' },
    { id: 'ita2', nombre: 'Spaghetti boloñesa', precio: 24900, icono: '🍝' },
    { id: 'ita3', nombre: 'Ensalada caprese', precio: 14900, icono: '🥗' },
    { id: 'ita4', nombre: 'Tiramisú', precio: 11900, icono: '🍰' } ] },
];
