package main

import (
    "fmt"
    "io/ioutil"
    "log"
    "strings"
    "strconv"
)

func main() {
    dat, err := ioutil.ReadFile("./input.txt")
    if err != nil {
        log.Fatal(err)
    }
    splitReport := strings.Split(string(dat), "\n")

    //remove blank from split report
    if len(splitReport) > 0 {
        splitReport = splitReport[:len(splitReport) - 1]
    }

    for _, num1 := range(splitReport) {
        for _, num2 := range(splitReport) {
            i, err := strconv.Atoi(num1)
            j, err := strconv.Atoi(num2)
            if err != nil {
                log.Fatal(err)
            }

            if i + j == 2020 {
                fmt.Printf("Day 1: %d\n", i * j) 
                goto parttwo
            }
        }
    }
parttwo:
    for _, num1 := range(splitReport) {
        for _, num2 := range(splitReport) {
            for _, num3 := range(splitReport) {
                i, err := strconv.Atoi(num1)
                j, err := strconv.Atoi(num2)
                n, err := strconv.Atoi(num3)
                if err != nil {
                    log.Fatal(err)
                }

                if i + j + n == 2020 {
                    fmt.Printf("day 2: %d\n", i * j * n)
                    goto fin
                }
            }
        }
    }
fin:

}
