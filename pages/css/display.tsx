import Head from 'next/head';
import Container from '../../components/container';
import Layout from '../../components/layout';

export default function Display() {
  return (
    <Layout>
      <Head>
        <title>Display</title>
      </Head>
      <Container>
        <h1 className="mb-8 text-5xl font-bold">Display</h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolor eveniet numquam
          beatae laboriosam, quia incidunt obcaecati, voluptate voluptas earum veritatis in dolorum
          reiciendis sed, neque alias impedit ipsam? Fugiat temporibus repellat architecto quam,
          esse nihil consectetur, a quia labore excepturi sit eligendi! Omnis reiciendis deserunt
          minus consectetur necessitatibus sapiente.
        </p>
        <h2 className="mb-4 text-2xl font-medium">Display Block</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum saepe quam, officiis a
          porro fuga placeat explicabo mollitia nemo?
        </p>
        <div className="mx-auto mb-5 flex max-w-xl space-x-3 rounded-md border-2 border-orange-300 p-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-md bg-teal-500">
            <span className="font-medium text-white">Box 1</span>
          </div>
          <div className="flex h-24 w-24 items-center justify-center rounded-md bg-pink-500">
            <span className="font-medium text-white">Box 2</span>
          </div>
          <div className="flex h-24 w-24 items-center justify-center rounded-md bg-blue-500">
            <span className="font-medium text-white">Box 3</span>
          </div>
        </div>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt accusamus labore quas
          quae voluptas voluptatum minus aut exercitationem ab reprehenderit, totam, earum itaque
          distinctio voluptatem quisquam quidem quaerat architecto ipsa?
        </p>

        <h2 className="mb-4 text-2xl font-medium">Visibility Hidden</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum saepe quam, officiis a
          porro fuga placeat explicabo mollitia nemo?
        </p>
        <div className="mx-auto flex max-w-xl space-x-3 rounded-md border-2 border-orange-300 p-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-md bg-teal-500">
            <span className="font-medium text-white">Box 1</span>
          </div>
          <div className="invisible flex h-24 w-24 items-center justify-center rounded-md bg-pink-500">
            <span className="font-medium text-white">Box 2</span>
          </div>
          <div className="flex h-24 w-24 items-center justify-center rounded-md bg-blue-500">
            <span className="font-medium text-white">Box 3</span>
          </div>
        </div>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt accusamus labore quas
          quae voluptas voluptatum minus aut exercitationem ab reprehenderit, totam, earum itaque
          distinctio voluptatem quisquam quidem quaerat architecto ipsa?
        </p>

        <h2 className="mb-4 text-2xl font-medium">Display None</h2>
        <p className="mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ipsum saepe quam, officiis a
          porro fuga placeat explicabo mollitia nemo?
        </p>
        <div className="mx-auto flex max-w-xl space-x-3 rounded-md border-2 border-orange-300 p-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-md bg-teal-500">
            <span className="font-medium text-white">Box 1</span>
          </div>
          <div className="flex hidden h-24 w-24 items-center justify-center rounded-md bg-pink-500">
            <span className="font-medium text-white">Box 2</span>
          </div>
          <div className="flex h-24 w-24 items-center justify-center rounded-md bg-blue-500">
            <span className="font-medium text-white">Box 3</span>
          </div>
        </div>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt accusamus labore quas
          quae voluptas voluptatum minus aut exercitationem ab reprehenderit, totam, earum itaque
          distinctio voluptatem quisquam quidem quaerat architecto ipsa?
        </p>
      </Container>
    </Layout>
  );
}
