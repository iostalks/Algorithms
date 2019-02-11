package main

import "fmt"

func isMatch(s string, p string) bool {
	if p == "" {
		return s == ""
	}

	last := p[len(p)-1]
	if last != '*' {

		if len(s) == 0 {
			return false
		}

		if last != '.' && s[len(s)-1] != p[len(p)-1] {
			return false
		}

		return isMatch(s[:len(s)-1], p[:len(p)-1])
	}

	result := false
	result = result || isMatch(s, p[:len(p)-2])
	patternChar := p[len(p)-2]

	for i := len(s) - 1; i >= 0; i-- {
		if patternChar == '.' || s[i] == patternChar {
			result = result || isMatch(s[:i], p[:len(p)-2])
		} else {
			result = result || isMatch(s[:i+1], p[:len(p)-2])
			break
		}
	}
	return result
}

func main() {
	fmt.Println(isMatch("aa", "a"))
	fmt.Println(isMatch("aa", "a*"))
	fmt.Println(isMatch("ab", ".*"))
	fmt.Println(isMatch("aab", "c*a*b"))
	fmt.Println(isMatch("mississippi", "mis*is*p*."))
}
