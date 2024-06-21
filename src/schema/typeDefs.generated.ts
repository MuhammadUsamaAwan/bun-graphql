import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"UUID","loc":{"start":7,"end":11}},"directives":[],"loc":{"start":0,"end":11}},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"NonEmptyString","loc":{"start":20,"end":34}},"directives":[],"loc":{"start":13,"end":34}},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"DateTime","loc":{"start":43,"end":51}},"directives":[],"loc":{"start":36,"end":51}},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"EmailAddress","loc":{"start":60,"end":72}},"directives":[],"loc":{"start":53,"end":72}},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"JWT","loc":{"start":81,"end":84}},"directives":[],"loc":{"start":74,"end":84}},{"kind":"EnumTypeDefinition","name":{"kind":"Name","value":"ACTION","loc":{"start":91,"end":97}},"directives":[],"values":[{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"create","loc":{"start":102,"end":108}},"directives":[],"loc":{"start":102,"end":108}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"update","loc":{"start":111,"end":117}},"directives":[],"loc":{"start":111,"end":117}},{"kind":"EnumValueDefinition","name":{"kind":"Name","value":"delete","loc":{"start":120,"end":126}},"directives":[],"loc":{"start":120,"end":126}}],"loc":{"start":86,"end":128}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Todo","loc":{"start":134,"end":138}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":143,"end":145}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID","loc":{"start":147,"end":151}},"loc":{"start":147,"end":151}},"loc":{"start":147,"end":152}},"directives":[],"loc":{"start":143,"end":152}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userId","loc":{"start":155,"end":161}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID","loc":{"start":163,"end":167}},"loc":{"start":163,"end":167}},"loc":{"start":163,"end":168}},"directives":[],"loc":{"start":155,"end":168}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"text","loc":{"start":171,"end":175}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NonEmptyString","loc":{"start":177,"end":191}},"loc":{"start":177,"end":191}},"loc":{"start":177,"end":192}},"directives":[],"loc":{"start":171,"end":192}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"completed","loc":{"start":195,"end":204}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":206,"end":213}},"loc":{"start":206,"end":213}},"loc":{"start":206,"end":214}},"directives":[],"loc":{"start":195,"end":214}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":217,"end":226}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":228,"end":236}},"loc":{"start":228,"end":236}},"loc":{"start":228,"end":237}},"directives":[],"loc":{"start":217,"end":237}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":240,"end":249}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":251,"end":259}},"loc":{"start":251,"end":259}},"loc":{"start":251,"end":260}},"directives":[],"loc":{"start":240,"end":260}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":263,"end":267}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":269,"end":273}},"loc":{"start":269,"end":273}},"directives":[],"loc":{"start":263,"end":273}}],"loc":{"start":129,"end":275}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"TodoSubscription","loc":{"start":282,"end":298}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"action","loc":{"start":303,"end":309}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACTION","loc":{"start":311,"end":317}},"loc":{"start":311,"end":317}},"loc":{"start":311,"end":318}},"directives":[],"loc":{"start":303,"end":318}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"data","loc":{"start":321,"end":325}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Todo","loc":{"start":327,"end":331}},"loc":{"start":327,"end":331}},"loc":{"start":327,"end":332}},"directives":[],"loc":{"start":321,"end":332}}],"loc":{"start":277,"end":334}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"TodoInput","loc":{"start":342,"end":351}},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"text","loc":{"start":356,"end":360}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NonEmptyString","loc":{"start":362,"end":376}},"loc":{"start":362,"end":376}},"loc":{"start":362,"end":377}},"directives":[],"loc":{"start":356,"end":377}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"completed","loc":{"start":380,"end":389}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean","loc":{"start":391,"end":398}},"loc":{"start":391,"end":398}},"directives":[],"loc":{"start":380,"end":398}}],"loc":{"start":336,"end":400}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":407,"end":412}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"todos","loc":{"start":417,"end":422}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Todo","loc":{"start":425,"end":429}},"loc":{"start":425,"end":429}},"loc":{"start":425,"end":430}},"loc":{"start":424,"end":431}},"loc":{"start":424,"end":432}},"directives":[],"loc":{"start":417,"end":432}}],"loc":{"start":402,"end":434}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation","loc":{"start":441,"end":449}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"createTodo","loc":{"start":454,"end":464}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":465,"end":470}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TodoInput","loc":{"start":472,"end":481}},"loc":{"start":472,"end":481}},"loc":{"start":472,"end":482}},"directives":[],"loc":{"start":465,"end":482}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Todo","loc":{"start":485,"end":489}},"loc":{"start":485,"end":489}},"loc":{"start":485,"end":490}},"directives":[],"loc":{"start":454,"end":490}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updateTodo","loc":{"start":493,"end":503}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":504,"end":506}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":508,"end":510}},"loc":{"start":508,"end":510}},"loc":{"start":508,"end":511}},"directives":[],"loc":{"start":504,"end":511}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":513,"end":518}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TodoInput","loc":{"start":520,"end":529}},"loc":{"start":520,"end":529}},"loc":{"start":520,"end":530}},"directives":[],"loc":{"start":513,"end":530}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Todo","loc":{"start":533,"end":537}},"loc":{"start":533,"end":537}},"loc":{"start":533,"end":538}},"directives":[],"loc":{"start":493,"end":538}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"deleteTodo","loc":{"start":541,"end":551}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":552,"end":554}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":556,"end":558}},"loc":{"start":556,"end":558}},"loc":{"start":556,"end":559}},"directives":[],"loc":{"start":552,"end":559}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Todo","loc":{"start":562,"end":566}},"loc":{"start":562,"end":566}},"loc":{"start":562,"end":567}},"directives":[],"loc":{"start":541,"end":567}}],"loc":{"start":436,"end":569}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Subscription","loc":{"start":576,"end":588}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"todoSubscription","loc":{"start":593,"end":609}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TodoSubscription","loc":{"start":611,"end":627}},"loc":{"start":611,"end":627}},"loc":{"start":611,"end":628}},"directives":[],"loc":{"start":593,"end":628}}],"loc":{"start":571,"end":630}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"User","loc":{"start":636,"end":640}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":645,"end":647}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID","loc":{"start":649,"end":653}},"loc":{"start":649,"end":653}},"loc":{"start":649,"end":654}},"directives":[],"loc":{"start":645,"end":654}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email","loc":{"start":657,"end":662}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress","loc":{"start":664,"end":676}},"loc":{"start":664,"end":676}},"loc":{"start":664,"end":677}},"directives":[],"loc":{"start":657,"end":677}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":680,"end":689}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":691,"end":699}},"loc":{"start":691,"end":699}},"loc":{"start":691,"end":700}},"directives":[],"loc":{"start":680,"end":700}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":703,"end":712}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":714,"end":722}},"loc":{"start":714,"end":722}},"loc":{"start":714,"end":723}},"directives":[],"loc":{"start":703,"end":723}}],"loc":{"start":631,"end":725}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserToken","loc":{"start":732,"end":741}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"token","loc":{"start":746,"end":751}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JWT","loc":{"start":753,"end":756}},"loc":{"start":753,"end":756}},"loc":{"start":753,"end":757}},"directives":[],"loc":{"start":746,"end":757}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":760,"end":764}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":766,"end":770}},"loc":{"start":766,"end":770}},"loc":{"start":766,"end":771}},"directives":[],"loc":{"start":760,"end":771}}],"loc":{"start":727,"end":773}},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"UserInput","loc":{"start":781,"end":790}},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"email","loc":{"start":795,"end":800}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EmailAddress","loc":{"start":802,"end":814}},"loc":{"start":802,"end":814}},"loc":{"start":802,"end":815}},"directives":[],"loc":{"start":795,"end":815}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"password","loc":{"start":818,"end":826}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NonEmptyString","loc":{"start":828,"end":842}},"loc":{"start":828,"end":842}},"loc":{"start":828,"end":843}},"directives":[],"loc":{"start":818,"end":843}}],"loc":{"start":775,"end":845}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":852,"end":857}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"me","loc":{"start":862,"end":864}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":866,"end":870}},"loc":{"start":866,"end":870}},"directives":[],"loc":{"start":862,"end":870}}],"loc":{"start":847,"end":872}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation","loc":{"start":879,"end":887}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"signUp","loc":{"start":892,"end":898}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":899,"end":904}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput","loc":{"start":906,"end":915}},"loc":{"start":906,"end":915}},"loc":{"start":906,"end":916}},"directives":[],"loc":{"start":899,"end":916}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserToken","loc":{"start":919,"end":928}},"loc":{"start":919,"end":928}},"loc":{"start":919,"end":929}},"directives":[],"loc":{"start":892,"end":929}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"signIn","loc":{"start":932,"end":938}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input","loc":{"start":939,"end":944}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput","loc":{"start":946,"end":955}},"loc":{"start":946,"end":955}},"loc":{"start":946,"end":956}},"directives":[],"loc":{"start":939,"end":956}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserToken","loc":{"start":959,"end":968}},"loc":{"start":959,"end":968}},"loc":{"start":959,"end":969}},"directives":[],"loc":{"start":932,"end":969}}],"loc":{"start":874,"end":971}}],"loc":{"start":0,"end":972}} as unknown as DocumentNode