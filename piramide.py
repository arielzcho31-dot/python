#ingresar la cantidad de asteriscos para la pirámide y imprimir la altura

bloques = int(input("Introduce la cantidad de bloques para la pirámide: ")) 
altura = 0
while bloques >= altura + 1:
    altura += 1
    bloques -= altura
print("La altura de la pirámide es:", altura)
