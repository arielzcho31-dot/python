horas = int(input('ingresar la hora de inicio; '))
minutos = int(input('ingrese el minuto de inicio; '))
duracion = int(input('ingresar la duracion del evento en minutos; '))

if duracion >= 59:
    horas_adicionales = duracion // 60
    minutos_adicionales = duracion % 60
    horas += horas_adicionales
    minutos += minutos_adicionales
    if minutos >= 60:
        horas += minutos // 60
        minutos = minutos % 60
        if horas >= 24:
            horas = horas % 24


print ("el evento terminara a las: ", horas, ':', minutos)