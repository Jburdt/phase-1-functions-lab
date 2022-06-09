function distanceFromHqInBlocks(blocks) {
  if (blocks > 42) {
    return blocks - 42
  } else {
    return 42 - blocks
  }
}

function distanceFromHqInFeet(block) {
      let distanceInBlocks =  distanceFromHqInBlocks(block)
    console.log("block",distanceInBlocks)
  return distanceInBlocks * 264
} 
function distanceTravelledInFeet(sblock, eblock) {
  if (sblock > eblock) {
    return (sblock - eblock) * 264 
  } else {
    return (eblock - sblock) * 264 
  }
}
// declare the function, 
// number of arguments/ parameters
// check condition for which number is greater
// adjust subtraction accordingly
// convert to feet
// return 



function calculatesFarePrice(sblock, eblock) {
  let feet = distanceTravelledInFeet(sblock, eblock)
  if (feet <= 400) { 
    return 0
  } else if (feet > 400 && feet < 2000) {
    return (feet - 400) * .02
  } else if (feet >= 2000 && feet <= 2500) {
    return 25
  } else if (feet > 2500) {
    return "cannot travel that far"

  }
    
  
}















/*function distanceTravelledInFeet(block1, block2) {
    if (block2 > block1) {
      return (block2 - block1) * 264
    } else {
     return (block1 - block2) * 264
    }     
}*/




/*describe('distanceTravelledInFeet()', function() {
    it('returns the distance travelled in feet', function() {
      expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
    });

    it('returns a distance in feet', function() {
      expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
    });

    it('returns distance when destination is below distance', function() {
      expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
    });
  });

  describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });*/
