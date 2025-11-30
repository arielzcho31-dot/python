x=float(input("ingresar un numero "))

# y=(1/x+(1/x+1(x+(1/x))))

# y = (1/(x+1(x+1/(x+(1/x)))))

y=(1/(x+(1/(x+(1/(x+(1/x)))))))

print("y= ",y)
########

x=1
print ('x= 1')
y=(1/(x+(1/(x+(1/(x+(1/x)))))))
print("y= ",y)
x=10
print ('x= 10')
y=(1/(x+(1/(x+(1/(x+(1/x)))))))
print("y= ",y)
x=100
print ('x= 100')
y=(1/(x+(1/(x+(1/(x+(1/x)))))))
print("y= ",y)
x=-5
print ('x= -5')
y=float(1/(x+(1/(x+(1/(x+(1/x)))))))
print("y= ",y)