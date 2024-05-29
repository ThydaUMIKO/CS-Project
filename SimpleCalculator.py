import tkinter as tk
from math import *

window = tk.Tk()
window.title("Calculator")
window.geometry("500x500")
window.resizable(False, False)

frame1 = tk.Frame(window, highlightbackground="green", highlightthickness=3)
frame1.pack()
frame2 = tk.Frame(window)
frame2.pack()

def click(item):
    entry1.insert("end", item)

def delete():
    val = entry1.get()
    n = len(val)
    entry1.delete(n-1, n)

def clear():
    entry1.delete(0, 'end')

def calculate():
    try:
        val = entry1.get()
        entry1.delete(0, 'end')
        entry1.insert(0, eval(val))
    except Exception as e:
        entry1.delete(0, 'end')
        entry1.insert(0, "Error")

def SQRT():
    try:
        val1 = float(entry1.get())
        result = sqrt(val1)
        entry1.delete(0, 'end')
        entry1.insert(0, result)
    except ValueError:
        entry1.delete(0, 'end')
        entry1.insert(0, "Error")

def power():
    try:
        val2 = float(entry1.get())
        result = val2 ** 2
        entry1.delete(0, 'end')
        entry1.insert(0, result)
    except ValueError:
        entry1.delete(0, 'end')
        entry1.insert(0, "Error")

entry1 = tk.Entry(frame1, width=35, font=("Cambria", 18))

# Number buttons
button0 = tk.Button(frame2, text="0", font=("Cambria", 18, "bold"), width=5, command=lambda: click("0"))
button1 = tk.Button(frame2, text="1", font=("Cambria", 18, "bold"), width=5, command=lambda: click("1"))
button2 = tk.Button(frame2, text="2", font=("Cambria", 18, "bold"), width=5, command=lambda: click("2"))
button3 = tk.Button(frame2, text="3", font=("Cambria", 18, "bold"), width=5, command=lambda: click("3"))
button4 = tk.Button(frame2, text="4", font=("Cambria", 18, "bold"), width=5, command=lambda: click("4"))
button5 = tk.Button(frame2, text="5", font=("Cambria", 18, "bold"), width=5, command=lambda: click("5"))
button6 = tk.Button(frame2, text="6", font=("Cambria", 18, "bold"), width=5, command=lambda: click("6"))
button7 = tk.Button(frame2, text="7", font=("Cambria", 18, "bold"), width=5, command=lambda: click("7"))
button8 = tk.Button(frame2, text="8", font=("Cambria", 18, "bold"), width=5, command=lambda: click("8"))
button9 = tk.Button(frame2, text="9", font=("Cambria", 18, "bold"), width=5, command=lambda: click("9"))

# Other buttons
buttonc = tk.Button(frame2, text="C", width=5, font=("Cambria", 18, "bold"), command=clear)
buttonadd = tk.Button(frame2, text="+", width=5, font=("Cambria", 18, "bold"), command=lambda: click("+"))
buttonsub = tk.Button(frame2, text="-", width=5, font=("Cambria", 18, "bold"), command=lambda: click("-"))
buttonmul = tk.Button(frame2, text="x", width=5, font=("Cambria", 18, "bold"), command=lambda: click("*"))
buttondiv = tk.Button(frame2, text="/", width=5, font=("Cambria", 18, "bold"), command=lambda: click("/"))
buttonequal = tk.Button(frame2, text="=", width=5, font=("Cambria", 18, "bold"), command=calculate)

buttonSQRT = tk.Button(frame2, text="SQRT", font=("Cambria", 18, "bold"), width=5, command=SQRT)
buttonpower = tk.Button(frame2, text="x^2", font=("Cambria", 18, "bold"), width=5, command=power)
buttonpoint = tk.Button(frame2, text=".", font=("Cambria", 18, "bold"), width=5, command=lambda: click("."))

# Layout
entry1.grid(columnspan=4, row=0, padx=10, pady=10)

# Row 1
buttonSQRT.grid(column=0, row=1)
buttonpower.grid(column=1, row=1)
buttonequal.grid(column=2, row=1)
buttonadd.grid(column=3, row=1)

# Row 2
button9.grid(column=0, row=2)
button8.grid(column=1, row=2)
button7.grid(column=2, row=2)
buttonsub.grid(column=3, row=2)

# Row 3
button6.grid(column=0, row=3)
button5.grid(column=1, row=3)
button4.grid(column=2, row=3)
buttonmul.grid(column=3, row=3)

# Row 4
button3.grid(column=0, row=4)
button2.grid(column=1, row=4)
button1.grid(column=2, row=4)
buttondiv.grid(column=3, row=4)

# Row 5
button0.grid(column=0, row=5)
buttonc.grid(column=1, row=5)
buttonpoint.grid(column=2, row=5)

window.mainloop()
