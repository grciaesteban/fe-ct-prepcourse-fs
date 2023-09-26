SELECT puestos.puesto, SUM(sueldo) from empleados
JOIN puestos ON empleados.id_puesto = puestos.id
GROUP BY  puestos.puesto
