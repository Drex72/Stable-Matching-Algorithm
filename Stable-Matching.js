const man_preferred_list = {
  Samuel: ['Fikayo', 'Lapae', 'Gbotemi', 'Samira', 'Oro'],
  Solutions: ['Samira', 'Oro', 'Gbotemi', 'Fikayo', 'Lapae'],
  Emmanuel: ['Fikayo', 'Lapae', 'Oro', 'Samira', 'Gbotemi'],
  Drex: ['Lapae', 'Samira', 'Gbotemi', 'Fikayo', 'Oro'],
  David: ['Samira', 'Oro', 'Lapae', 'Fikayo', 'Gbotemi'],
}
const women_preferred_list = {
  Fikayo: ['Emmanuel', 'David', 'Samuel', 'Solutions', 'Drex'],
  Lapae: ['Drex', 'David', 'Solutions', 'Emmanuel', 'Samuel'],
  Gbotemi: ['Solutions', 'David', 'Solutions', 'Emmanuel', 'Drex'],
  Samira: ['Solutions', 'Drex', 'Emmanuel', 'David', 'Samuel'],
  Oro: ['Solutions', 'Emmanuel', 'Samuel', 'David', 'Drex'],
}
// Create an array to store each free man
let freeMen = []

// Array for engaged people
const engagements = []

// Free all men
function freeEachMan() {
  for (let man in man_preferred_list) {
    freeMen.push(man)
  }
}

function stableMatching() {
  // While there is still a free man to be engaged
  while (freeMen.length > 0) {
    for (let man of freeMen) {
      beginMatching(man)
    }
  }
}
// Function to remove an element from an array
function removeElement(array, value) {
  let newArray = array.filter((item) => {
    return item !== value
  })
  // Set the frreemen array to the filtered Array
  return (freeMen = newArray)
}

function beginMatching(man) {
  console.log(`Dealing with ${man}`)
  // For each woman in the man's list
  for (let woman of man_preferred_list[man]) {
    let takenMatch = []
    // Creating a tuple to find if the selected woman has a match already
    for (let couple of engagements) {
      if (couple[1] == woman) {
        takenMatch.push(couple)
      }
    }
    // If she does not have a match
    if (takenMatch.length === 0) {
      // Then she is not engaged
      engagements.push([man, woman])
      removeElement(freeMen, man)
      console.log(`${man} is no longer single and is now engaged to ${woman}`)
      break
    }

    // If she has a match
    else if (takenMatch.length > 0) {
      console.log(`${woman} is taken already`)
      // index of the current guy
      let currentGuy = women_preferred_list[woman].indexOf(takenMatch[0][0])
      // index of the new guy
      let newGuy = women_preferred_list[woman].indexOf(man)
      // Comparing them
      if (currentGuy < newGuy) {
        console.log(`${woman} is satisfied with ${takenMatch[0][0]}`)
      } else {
        console.log(`${man} is better then ${takenMatch[0][0]}`)
        removeElement(freeMen, man)
        freeMen.push(takenMatch[0][0])
        takenMatch[0][0] = man
        break
      }
    }
  }
}

function main() {
  freeEachMan()
  stableMatching()
  console.log(engagements)
}
main()
