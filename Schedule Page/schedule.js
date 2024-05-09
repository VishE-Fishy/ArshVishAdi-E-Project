function dashboard(){
    location.replace("dashboard.html")
}
function save(){
    window.alert("Directions to Save Schedule:\n#1) Click the drop-down menu in 'Destination'.\n#2) Then press 'Save as PDF'.\n#3) Make sure that the drop-down menu for 'Pages' is set to 'All', and the drop-down menu for 'Layout' is set to 'Landscape'.\n#4) Press the 'Save' button below, (no need to change anything in 'More Settings').\nYou can share your schedule by sharing your saved pdf file.")
    window.print()
}
function clearSchedule(){
    if (confirm("Are you sure you want to clear?") == true) {
        document.getElementById("MondayTask1").value = ""
        document.getElementById("TuesdayTask1").value = ""
        document.getElementById("WednesdayTask1").value = ""
        document.getElementById("ThursdayTask1").value = ""
        document.getElementById("FridayTask1").value = ""
        document.getElementById("SaturdayTask1").value = ""
        document.getElementById("SundayTask1").value = ""

        document.getElementById("MondayTask2").value = ""
        document.getElementById("TuesdayTask2").value = ""
        document.getElementById("WednesdayTask2").value = ""
        document.getElementById("ThursdayTask2").value = ""
        document.getElementById("FridayTask2").value = ""
        document.getElementById("SaturdayTask2").value = ""
        document.getElementById("SundayTask2").value = ""

        document.getElementById("MondayTask3").value = ""
        document.getElementById("TuesdayTask3").value = ""
        document.getElementById("WednesdayTask3").value = ""
        document.getElementById("ThursdayTask3").value = ""
        document.getElementById("FridayTask3").value = ""
        document.getElementById("SaturdayTask3").value = ""
        document.getElementById("SundayTask3").value = ""

        document.getElementById("MondayTask4").value = ""
        document.getElementById("TuesdayTask4").value = ""
        document.getElementById("WednesdayTask4").value = ""
        document.getElementById("ThursdayTask4").value = ""
        document.getElementById("FridayTask4").value = ""
        document.getElementById("SaturdayTask4").value = ""
        document.getElementById("SundayTask4").value = ""

        document.getElementById("MondayTask5").value = ""
        document.getElementById("TuesdayTask5").value = ""
        document.getElementById("WednesdayTask5").value = ""
        document.getElementById("ThursdayTask5").value = ""
        document.getElementById("FridayTask5").value = ""
        document.getElementById("SaturdayTask5").value = ""
        document.getElementById("SundayTask5").value = ""
    }}
function edit(){
    document.getElementById("MondayTask1").disabled = false
    document.getElementById("TuesdayTask1").disabled = false
    document.getElementById("WednesdayTask1").disabled = false
    document.getElementById("ThursdayTask1").disabled = false
    document.getElementById("FridayTask1").disabled = false
    document.getElementById("SaturdayTask1").disabled = false
    document.getElementById("SundayTask1").disabled = false

    document.getElementById("MondayTask2").disabled = false
    document.getElementById("TuesdayTask2").disabled = false
    document.getElementById("WednesdayTask2").disabled = false
    document.getElementById("ThursdayTask2").disabled = false
    document.getElementById("FridayTask2").disabled = false
    document.getElementById("SaturdayTask2").disabled = false
    document.getElementById("SundayTask2").disabled = false

    document.getElementById("MondayTask3").disabled = false
    document.getElementById("TuesdayTask3").disabled = false
    document.getElementById("WednesdayTask3").disabled = false
    document.getElementById("ThursdayTask3").disabled = false
    document.getElementById("FridayTask3").disabled = false
    document.getElementById("SaturdayTask3").disabled = false
    document.getElementById("SundayTask3").disabled = false

    document.getElementById("MondayTask4").disabled = false
    document.getElementById("TuesdayTask4").disabled = false
    document.getElementById("WednesdayTask4").disabled = false
    document.getElementById("ThursdayTask4").disabled = false
    document.getElementById("FridayTask4").disabled = false
    document.getElementById("SaturdayTask4").disabled = false
    document.getElementById("SundayTask4").disabled = false

    document.getElementById("MondayTask5").disabled = false
    document.getElementById("TuesdayTask5").disabled = false
    document.getElementById("WednesdayTask5").disabled = false
    document.getElementById("ThursdayTask5").disabled = false
    document.getElementById("FridayTask5").disabled = false
    document.getElementById("SaturdayTask5").disabled = false
    document.getElementById("SundayTask5").disabled = false
}
function stop_edit(){
    document.getElementById("MondayTask1").disabled = true
    document.getElementById("TuesdayTask1").disabled = true
    document.getElementById("WednesdayTask1").disabled = true
    document.getElementById("ThursdayTask1").disabled = true
    document.getElementById("FridayTask1").disabled = true
    document.getElementById("SaturdayTask1").disabled = true
    document.getElementById("SundayTask1").disabled = true

    document.getElementById("MondayTask2").disabled = true
    document.getElementById("TuesdayTask2").disabled = true
    document.getElementById("WednesdayTask2").disabled = true
    document.getElementById("ThursdayTask2").disabled = true
    document.getElementById("FridayTask2").disabled = true
    document.getElementById("SaturdayTask2").disabled = true
    document.getElementById("SundayTask2").disabled = true

    document.getElementById("MondayTask3").disabled = true
    document.getElementById("TuesdayTask3").disabled = true
    document.getElementById("WednesdayTask3").disabled = true
    document.getElementById("ThursdayTask3").disabled = true
    document.getElementById("FridayTask3").disabled = true
    document.getElementById("SaturdayTask3").disabled = true
    document.getElementById("SundayTask3").disabled = true

    document.getElementById("MondayTask4").disabled = true
    document.getElementById("TuesdayTask4").disabled = true
    document.getElementById("WednesdayTask4").disabled = true
    document.getElementById("ThursdayTask4").disabled = true
    document.getElementById("FridayTask4").disabled = true
    document.getElementById("SaturdayTask4").disabled = true
    document.getElementById("SundayTask4").disabled = true

    document.getElementById("MondayTask5").disabled = true
    document.getElementById("TuesdayTask5").disabled = true
    document.getElementById("WednesdayTask5").disabled = true
    document.getElementById("ThursdayTask5").disabled = true
    document.getElementById("FridayTask5").disabled = true
    document.getElementById("SaturdayTask5").disabled = true
    document.getElementById("SundayTask5").disabled = true
}
