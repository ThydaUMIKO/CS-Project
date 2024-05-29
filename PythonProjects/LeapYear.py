
import tkinter as tk

def testleapyear(start_year, end_year):
    leap_years = []
    for ryear in range(start_year, end_year):
        # Check if the year is a leap year
        if (ryear % 4 == 0 and ryear % 100 != 0) or (ryear % 400 == 0):
            leap_years.append(ryear)
    return len(leap_years)

def display_result():
    try:
        start_year = int(start_year_entry.get())
        end_year = int(end_year_entry.get())
        leap_year_count = testleapyear(start_year, end_year)
        Result.delete(0, tk.END)  # Clear any previous result
        Result.insert(0, f"There are {leap_year_count} leap years")
    except ValueError:
        Result.delete(0, tk.END)
        Result.insert(0, "Invalid input. Please enter valid years.")

# Create the GUI window
window = tk.Tk()
window.title("Leap Year Test")
window.geometry("300x200")
window.resizable(False, False)

# Input fields
start_year_label = tk.Label(window, text="Start Year")
start_year_label.place(relx=0.2, rely=0)
start_year_entry = tk.Entry(window)
start_year_entry.place(relx=0.1, rely=0.1)

end_year_label = tk.Label(window, text="End Year")
end_year_label.place(relx=0.2, rely=0.2)
end_year_entry = tk.Entry(window)
end_year_entry.place(relx=0.1, rely=0.3)

# Test button
Test = tk.Button(window, text="Test", command=display_result)
Test.place(relx=0.25, rely=0.4)

# Result display
Result = tk.Entry(window)
Result.place(relx=0.1, rely=0.5)

window.mainloop()