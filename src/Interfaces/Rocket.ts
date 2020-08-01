export default interface Rocket  {
  rocket_id: string,
  rocket_name: string,
  description: string,
  flickr_images: string[],
  cost_per_launch: number,
  wikipedia: string,
  height: {
    meters: number,
    feet: number
  },
  diameter: {
    meters: number,
    feet: number
  },
  mass: {
    kg: number,
    lb: number
  }

}




