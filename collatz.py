n = int(input('ingresar un numero: '))
pasos = 0
if n > 0:
	c0 = n
	while c0 != 1:
		if c0 % 2 == 0:
			c0 = c0 / 2
			print(c0)
			pasos += 1
		else:
			c0 = 3 * c0 + 1
			print(c0)
			pasos += 1
	print(c0)
print(pasos)