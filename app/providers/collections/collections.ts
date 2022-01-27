import gql from "graphql-tag";
import { sdk } from "../../graphqlWrapper";
import { listedProductFragment } from "../products/products";

export function getCollectionsHome() {
  return sdk.collections().then((result) => result.collections.items);
}

gql`
  query collections {
    collections {
      items {
        id
        name
        slug
      }
    }
  }
`;
gql`
  query collection($slug: String, $id: ID) {
    collection(slug: $slug, id: $id) {
      id
      name
      slug
    }
  }
`;