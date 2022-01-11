export interface IFindCaseById {
  title: string
  link_id: string
  short_text: string
  about_text: string
  challenge_text: string
  objective_text: string
  solution_text: string
  result_text: string
  image: string
  seo: ICaseSeo
}

interface ICaseSeo {
  meta_title: string
  meta_description: string
}
