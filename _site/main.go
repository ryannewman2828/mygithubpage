package main

import (
    "os"
    "fmt"
    "strings"
    "io/ioutil"
)

func main(){
    args := os.Args[1:]
    if len(args) != 2 {
        fmt.Println("Error Incorrect Usage!")
        fmt.Println("Usage: go run main.go <type_of_entry> <name>")
        os.Exit(1)
    }
    
    entryType := args[0]
    name := args[1]
    lowerName := strings.ToLower(name)
    dataName := lowerName + ".json"
    
    // Only checks _data because if its not there it also doesn't exist in posts
    if _, err := os.Stat("/_data/" + dataName); err == nil {
        fmt.Println("The entry you are trying to create already exists")
        os.Exit(1)
    }
    
    var year string
    // Checks valid type
    if entryType == "project"{
        year = "2014"
    } else if entryType == "experience" {
        year = "2016"
    } else if entryType == "skill" {
        year = "2015"
    } else {
        fmt.Println("Invalid entry type")
        fmt.Println("Valid types are project, skill or experience")
        os.Exit(1)
    }
    
    
    // Creation of the data json file
    file, err := ioutil.ReadFile("templates/" + entryType + ".json")
    if err != nil {
        fmt.Println(err.Error())
        os.Exit(1)
    }
    contents := string(file)
    fmt.Println(contents)

    f, err := os.Create("./_data/" + dataName)
    if err != nil {
        fmt.Println(err.Error())
        os.Exit(1)
    }
    defer f.Close()
    f.Write([]byte(contents))
    
    // Creation of the markdown file
    file, err = ioutil.ReadFile("templates/" + entryType + "_template.md")
    if err != nil {
        fmt.Println(err.Error())
        os.Exit(1)
    }
    newContents := strings.Replace(string(file), "{{name-here}}", name, -1)
    newContents = strings.Replace(string(newContents), "{{name-here | lowercased}}", lowerName, -1)
    fmt.Println(newContents)

    f, err = os.Create("./_posts/" + year + "-05-15-" + lowerName + ".md")
    if err != nil {
        fmt.Println(err.Error())
        os.Exit(1)
    }
    defer f.Close()
    f.Write([]byte(newContents))
}
