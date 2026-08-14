const clientes = [
{id:1,nombre:"Juan Pérez",documento:"01234567-8",telefono:"7000-1122",estado:"Activo",fecha:"12/08/2026"},
{id:2,nombre:"María López",documento:"02345678-9",telefono:"7011-2233",estado:"Activo",fecha:"10/08/2026"},
{id:3,nombre:"Carlos Hernández",documento:"03456789-0",telefono:"7022-3344",estado:"Activo",fecha:"08/08/2026"},
{id:4,nombre:"Ana Martínez",documento:"04567890-1",telefono:"7033-4455",estado:"Inactivo",fecha:"05/08/2026"},
{id:5,nombre:"Roberto García",documento:"05678901-2",telefono:"7044-5566",estado:"Activo",fecha:"03/08/2026"},
{id:6,nombre:"Sofía Ramírez",documento:"06789012-3",telefono:"7055-6677",estado:"Activo",fecha:"01/08/2026"},
{id:7,nombre:"Miguel Torres",documento:"07890123-4",telefono:"7066-7788",estado:"Inactivo",fecha:"30/07/2026"},
{id:8,nombre:"Laura Castillo",documento:"08901234-5",telefono:"7077-8899",estado:"Activo",fecha:"28/07/2026"}
];

function cargarClientes(lista=clientes){
  let html="";
  lista.forEach(c=>{
    const badge=c.estado==="Activo"?"badge-active":"badge-inactive";
    html+=`<tr><td>#${c.id}</td><td><div class="client-name">${c.nombre}</div><div class="client-email">cliente${c.id}@correo.com</div></td><td>${c.documento}</td><td>${c.telefono}</td><td><span class="badge ${badge}">${c.estado}</span></td><td>${c.fecha}</td><td class="text-end"><button class="action-btn me-1" title="Editar"><i class="bi bi-pencil"></i></button><button class="action-btn" title="Eliminar" onclick="eliminarCliente(${c.id})"><i class="bi bi-trash"></i></button></td></tr>`;
  });
  $("#tablaClientes").html(html);
}
function eliminarCliente(id){if(confirm("¿Desea eliminar este cliente?")){$(`#tablaClientes tr`).filter(function(){return $(this).find("td:first").text()==="#"+id}).remove();}}
$("#buscar").on("input",function(){const q=$(this).val().toLowerCase();cargarClientes(clientes.filter(c=>c.nombre.toLowerCase().includes(q)||c.documento.includes(q)||c.telefono.includes(q)));});
$("#guardar").click(function(){alert("Cliente guardado correctamente (simulado).");bootstrap.Modal.getInstance(document.getElementById("clienteModal")).hide();});
$("#btnMenu").click(function(){$("#sidebar").toggleClass("show");});
$(document).ready(()=>cargarClientes());