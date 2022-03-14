Linie lotnicze muszą udostępnić swoim klientom loty do każdego zakątka, dlatego potrzebują aplikacji, która na to im pozwoli. Klient musi mieć możliwość przesiadki, gdy nie ma bezpośredniego połączenia.

Zadaniem dewelopera jest przygotowanie następujących funkcjonalności:

- wybór lotniska A i lotniska B
- pokazanie możliwie najkrótszego połączenia z wykazem wszystkich portów lotniczych

Uwaga#1!
W liście dostępnych połączeń loty są wykonywane w dwie strony, czyli z ATH można dostać się do EDI oraz z EDI można dostać się do ATH

Uwaga#2!
Nie można zmienić składni występujących połączeń. To znaczy, że format połączeń musi zostać taki jak w przykładzie ['ATH',EDI']
Lista dostępnych lotnisk i połączeń
Lista dostępnych lotnisk:

'ATH' 'BSL' 'BFS' 'BLQ' 'BTS' 'BRS' 'CRL' 'BUD' 'DUB' 'EDI' 'EIN' 'GLA' 'HAM' CTA' 'KEF' 'CGN' 'SUF' 'LCA' 'LPL' 'LIS' 'LTN' 'STN' 'MAD'


Lista połączeń:

['ATH','EDI'] ['ATH','GLA'] ['ATH','CTA'] ['BFS','CGN'] ['BFS','LTN'] ['BFS','CTA'] ['BTS','STN'] ['BTS','BLQ'] ['CRL','BLQ'] ['CRL','BSL'] ['CRL','LTN'] ['DUB','LCA'] ['LTN','DUB'] ['LTN','MAD'] ['LCA','HAM'] ['EIN','BUD'] ['EIN','MAD'] ['HAM','BRS'] ['KEF','LPL'] ['KEF','CGN'] ['SUF','LIS'] ['SUF','BUD'] ['SUF','STN'] ['STN','EIN'] ['STN','HAM'] ['STN','DUB'] ['STN','KEF']
