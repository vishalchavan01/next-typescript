
const Blogs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;

  console.log('slug', slug);
  return (
    <div>Blogs { }</div>
  )
}

export default Blogs