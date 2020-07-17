import Layout from '../components/layout'
import BioCard from '../components/biocard'
function AboutPage () {
  return (
    <Layout>
      <div className='flex flex-col object-center md:flex-row md:space-x-6 md:space-y-0'>
        <BioCard />
        <div className='space-y-6 md:w-1/2'>
          {[
            {
              heading: 'My life',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim leo eu dolor ornare iaculis. Phasellus ornare semper ullamcorper. Maecenas dictum efficitur sem nec vestibulum. Maecenas ornare varius commodo. Suspendisse at nisi efficitur, auctor ante a, lacinia nulla. Cras quis elit sit amet dolor tincidunt posuere a eget nibh. Ut et risus sit amet dolor tempor aliquam nec nec mi. Nullam consequat aliquam ipsum, et gravida neque posuere mollis. Duis sed sollicitudin arcu. Sed hendrerit magna ut nisi dictum, quis vestibulum orci rutrum. Sed augue metus, dignissim pharetra erat id, volutpat pulvinar tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
            },
            {
              heading: 'What\'s Next',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam suscipit cursus dui, sed venenatis sapien porta quis. Etiam mattis sed diam sit amet sollicitudin. Duis.'
            }
          ].map((section) => (
            <div key={section.heading}>
              <h2 className='mb-1 text-xl font-bold'>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
