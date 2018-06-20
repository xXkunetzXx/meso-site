import React, { PureComponent } from 'react';
import classNames from 'classnames';

const icons = {
  enrollment: props => (
    <svg
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="m23.2410003 42c-10.0582227 0-18.2410003-8.0746667-18.2410003-18s8.1827776-18 18.2410003-18c2.777136 0 5.4452764.60088889 7.9287548 1.78488889.8962862.42755555 1.2710149 1.49066667.8377348 2.37422221-.4323792.8844445-1.5115258 1.2533333-2.4051096.8275556-1.9907462-.9493334-4.1310236-1.43111114-6.36138-1.43111114-8.0710796 0-14.63783974 6.48000004-14.63783974 14.44444444s6.56676014 14.4444444 14.63783974 14.4444444c8.0710797 0 14.6378398-6.48 14.6378398-14.4444444 0-.9813333.8071079-1.7777778 1.8015803-1.7777778.9944723 0 1.8015802.7964445 1.8015802 1.7777778 0 9.9253333-8.1827776 18-18.2410003 18zm18.2313619-31.2343111c.7035171.6942222.7035171 1.8195555 0 2.5137778l-16.0565843 15.8453333c-.3522089.3466667-.8134134.5208889-1.2737172.5208889-.4612046 0-.9224091-.1742222-1.2737173-.5208889l-6.6226091-6.5342222c-.7035171-.6942222-.7035171-1.8204445 0-2.5137778.7035171-.6951111 1.8439174-.6951111 2.5474345 0l5.3488919 5.2773333 14.782867-14.5884444c.7035171-.6942222 1.8439174-.6942222 2.5474345 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  identification: props => (
    <svg
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="m9.45412786 22.3027072c0-7.6637288 6.26319734-13.87642854 13.98921784-13.87642854 7.725157 0 13.9883543 6.21269974 13.9883543 13.87642854s-6.2631973 13.8764286-13.9883543 13.8764286c-7.7260205 0-13.98921784-6.2126998-13.98921784-13.8764286m31.92218614 17.0962739-5.2718626-5.2302143c2.9550064-3.1016388 4.7813765-7.2714199 4.7813765-11.8660596 0-9.5404729-7.8244632-17.3027072-17.4424822-17.3027072s-17.4433457 7.7622343-17.4433457 17.3027072c0 9.5413295 7.8253267 17.3027072 17.4433457 17.3027072 3.4498102 0 6.6612856-1.0116088 9.3719124-2.7333138l5.5533741 5.5094561c.4153589.41201.9602475.6184433 1.5051362.6184433.5422981 0 1.0871868-.2064333 1.5025456-.6184433.8315813-.82402.8315813-2.1585556 0-2.9825756"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  submission: props => (
    <svg
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="m24.5 44c-10.201037 0-18.5-8.2673841-18.5-18.4296046 0-6.6191858 3.59311111-12.7642076 9.3760741-16.03603121.877037-.49509654 1.9925185-.18930161 2.4904197.68439811.4979013.8736998.1909383 1.9849367-.6870123 2.4818535-4.6419013 2.6256498-7.52516051 7.557503-7.52516051 12.8697796 0 8.1545312 6.66000001 14.7891889 14.84567901 14.7891889s14.845679-6.6346577 14.845679-14.7891889c0-5.3386696-2.9060988-10.2823542-7.5836296-12.9016333-.8797778-.4932763-1.1913087-1.602693-.6961482-2.4791231.4942469-.87734017 1.6060741-1.18768561 2.487679-.69531938 5.8268149 3.26363268 9.4464198 9.42321608 9.4464198 16.07607578 0 10.1622205-8.298963 18.4296046-18.5 18.4296046zm8.4077704-17.9998535c.7135061.7107912.7135061 1.8629827 0 2.5737739l-7.1094815 7.0824288c-.0877037.0882801-.1827161.166549-.2877778.2348068-.0328889.0227526-.0694321.0373143-.1041481.0564265-.067605.0400445-.1352099.0800891-.2082963.1101225-.0529877.0218425-.1087161.0336739-.1617037.0500557-.0602963.0182021-.1169383.0400446-.1799753.0527861-.1114568.0218425-.2247408.0327637-.3389383.0336738-.0045679 0-.0100494.0018202-.0164445.0018202h-.0009135c-.1205926 0-.2402716-.0127414-.3590371-.035494-.0465926-.0100112-.0904444-.0282132-.137037-.0409547-.0685185-.0191122-.1370371-.0354941-.2037284-.0627972-.0520741-.0218425-.0986667-.0518759-.148-.0782689-.0557284-.0291233-.1141975-.0546062-.1662716-.0901003-.0758272-.0500557-.1443457-.1101226-.2110371-.1710995-.0210123-.0200223-.0465925-.0336739-.0666913-.0546063l-7.1167901-7.0887995c-.7135062-.7107912-.7135062-1.8629827 0-2.5737739.7135061-.7107912 1.8700987-.7107912 2.5836049 0l3.9987407 3.9826148v-25.16255344c0-1.00475474.8176544-1.82020786 1.8271605-1.82020786 1.0085926 0 1.8271605.81545312 1.8271605 1.82020786v25.16073324l3.996-3.9807946c.7135062-.7107912 1.8700988-.7107912 2.583605 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  processing: props => (
    <svg
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="m39.7681337 22.2235374c-1.451762 0-2.6335125-1.1700353-2.6335125-2.6085008 0-1.4375738 1.1817505-2.6085009 2.6335125-2.6085009 1.449962 0 2.6317125 1.1709271 2.6317125 2.6085009 0 1.4384655-1.1817505 2.6085008-2.6317125 2.6085008m-.0692108-8.7841823c-.3420147 0-.6741288.0347801-1.0008428.0882878-3.3499431-4.61058096-8.8086764-7.5276429-14.767831-7.5276429-6.201265 0-11.9147091 3.08650301-15.2808529 8.2553477-.54002308.8275859-.29881277 1.9307365.53642292 2.4658136.83433568.5324017 1.94948328.2951842 2.48860628-.5324017 2.7001154-4.1459557 7.2813112-6.621579 12.2558237-6.621579 4.5748955 0 8.7843753 2.1412002 11.4925911 5.5665853-1.2015514 1.1263373-1.9575837 2.7164081-1.9575837 4.4812707 0 3.4057656 2.7973195 6.1756814 6.2336664 6.1756814 3.4363468 0 6.2318662-2.7699158 6.2318662-6.1756814 0-3.4048739-2.7955194-6.1756815-6.2318662-6.1756815m-34.09876908 14.9604879c0-1.4375737 1.18085046-2.6085008 2.63171245-2.6085008 1.45176203 0 2.63351253 1.1709271 2.63351253 2.6085008 0 1.4384656-1.1817505 2.6093927-2.63351253 2.6093927-1.45086199 0-2.63171245-1.1709271-2.63171245-2.6093927m33.14301608 2.8781039c-.8352357-.5341853-1.9494833-.2951842-2.4868062.5324017-2.7001154 4.1459557-7.2831112 6.6224708-12.2567237 6.6224708-4.5757955 0-8.7798752-2.1456591-11.4871908-5.5710443 1.1988512-1.1263373 1.9530834-2.7155162 1.9530834-4.4785952 0-3.4048739-2.7973195-6.1756815-6.23366633-6.1756815-3.43724686 0-6.23186627 2.7708076-6.23186627 6.1756815 0 3.4057656 2.79461941 6.1765732 6.23186627 6.1765732.34201461 0 .6741288-.03478.99994273-.087396 3.3499431 4.610581 8.8086764 7.5276429 14.767831 7.5276429 6.202165 0 11.9156091-3.086503 15.2817529-8.2562395.538223-.8275859.2988128-1.9316283-.538223-2.4658136"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  reporting: props => (
    <svg
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="m35.3808717 32.8607225-8.2431589-8.244336 10.7487298-4.512145c.3476246 1.2416866.5481772 2.5439869.5481772 3.8953128 0 3.2535222-1.0812015 6.3367916-3.0537481 8.8611682m1.1222034-16.0420927-10.7202068 4.4996657v-11.63067325c4.587753.56869785 8.5069971 3.29363405 10.7202068 7.13100755m4.1251449.3030678c.8797575 2.1205833 1.37178 4.4426176 1.37178 6.8778567 0 4.8071904-1.8727159 9.3273578-5.2723059 12.727957-.3485159.348528-.8048846.5223463-1.2603619.5223463-.4563687 0-.9127373-.1738183-1.2603619-.5223463l-11.4662626-11.4657687c-.0231749-.0240671-.0410018-.0516998-.0623941-.0766583-.025849-.028524-.049024-.0579394-.0730903-.0873548-.0285231-.0365464-.0615028-.0704187-.0882432-.1096393-.0276317-.0418946-.0463499-.0882462-.0713076-.1319236-.0311971-.0579394-.0659595-.1132048-.0918085-.1747097-.0240663-.0579394-.0374365-.118553-.0552634-.1782752-.0142615-.0508084-.0347625-.0998341-.0454586-.1524253-.0008914-.0026741-.0008914-.0053482-.0017827-.0080224-.0222836-.1132047-.0338711-.2281922-.0338711-.3431797v-.007131-16.20967142c0-.98497042.7986451-1.78275188 1.7826901-1.78275188 7.4445137 0 13.8479365 4.5424518 16.5834744 11.0013618.0044568.0106965.0124789.0187189.0160442.0303068.0124789.0294154.0169356.0597222.0285231.090029zm-11.8802032 20.5141258c.9314555-.3253522 1.9458062.1666873 2.2693644 1.0972838.3235583.9297051-.1684642 1.9458737-1.0981371 2.2694431-1.8985649.6622923-3.8907211.9974497-5.918531.9974497-9.925127 0-18.0007131-8.0749746-18.0007131-18.0004457 0-6.9901701 4.1001872-13.4045113 10.4456725-16.34159506.8922364-.41270705 1.952937-.02406715 2.3674124.86909154.4126928.89315869.0240664 1.95211332-.8699527 2.36660312-5.0886888 2.3559066-8.37775204 7.5000371-8.37775204 13.1059004 0 7.9590958 6.47562174 14.4349419 14.43533294 14.4349419 1.6284874 0 3.2248863-.2691955 4.7473037-.7986728z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
};

export default class Icon extends PureComponent {
  static defaultProps = {
    iconSize: 24,
    size: 24,
  };

  render() {
    const { name, iconSize, size } = this.props;
    const Component = icons[name];

    if (typeof Component !== 'function') {
      return null;
    }

    return (
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
        }}>
        <Component width={iconSize} height={iconSize} />
      </span>
    );
  }
}
