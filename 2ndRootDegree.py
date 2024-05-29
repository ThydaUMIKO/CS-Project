import math
import tkinter as tk
from math import *

mainwin=tk.Tk() #tver gui on window
mainwin.title("Thyda nus ey")
mainwin.geometry("500x500")
mainwin.resizable(0,0)

def showval():

    a=int(entrya.get())
    b=int(entryb.get())
    c=int(entryc.get())

    delta=b**2-4*a*c
    if delta > 0:
        x1=(-b+math.sqrt(delta))/2*a
        x2=(-b-math.sqrt(delta))/2*a
    elif delta == 0:
        x1=x2=-b/2*a
    else:
        x1=x2="No root"
    
    entryx1.configure(state='normal')
    entryx2.configure(state='normal')
        
    entryx1.delete(0,'end')
    entryx2.delete(0,'end')
    entryx1.insert(0,x1)
    entryx2.insert(0,x2)
    entryx1.configure(state='readonly')
    entryx2.configure(state='readonly')
def clearall():
    entrya.delete(0,"end")
    entryb.delete(0,"end")
    entryc.delete(0,"end")
    entryx1.delete(0,"end")
    entryx2.delete(0,"end")
label1=tk.Label(mainwin,text="ax^2+bx+c=0")

labela=tk.Label(mainwin,text="a=")
labelb=tk.Label(mainwin,text="b=")
labelc=tk.Label(mainwin,text="c=")

labelx1=tk.Label(mainwin,text="x1=")
labelx2=tk.Label(mainwin,text="x2=")

entrya=tk.Entry()
entryb=tk.Entry()
entryc=tk.Entry()
entryx1=tk.Entry()
entryx2=tk.Entry()

button1=tk.Button(mainwin,text="Find root",command=showval)
button2=tk.Button(mainwin,text="Clear",command=clearall)

label1.place(relx=0.3,rely=0)
labela.place(relx=0.1,rely=0.1)
entrya.place(relx=0.2,rely=0.1)
labelb.place(relx=0.1,rely=0.2)
entryb.place(relx=0.2,rely=0.2)
labelc.place(relx=0.1,rely=0.3)
entryc.place(relx=0.2,rely=0.3)
button1.place(relx=0.35,rely=0.4)

labelx1.place(relx=0.05,rely=0.5)
entryx1.place(relx=0.2,rely=0.5)
labelx2.place(relx=0.05,rely=0.6)
entryx2.place(relx=0.2,rely=0.6)
button2.place(relx=0.4,rely=0.7)
mainwin.mainloop()