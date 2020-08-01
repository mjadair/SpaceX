export default interface Dragon  {
  id: string,
  name: string,
  description: string,
  flickr_images: string[],
  thrusters: object[],
  active: boolean,
  wikipedia: string,
  dry_mass_kg: number,
  launch_payload_mass: {
    kg: number,
    lb: number
  }
  return_payload_mass: {
    kg: number,
    lb: number

  }

}