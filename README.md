# branch follow 
development

# blockchain-with-java-script #cryptocurrency
we made block chain project using java script and creating own Cryptocurrency running on different nodes
# Run using following cmd in terminal
npm run node_1 to run 1st node.
and so on for rest
# browser to open
http:localhost:3003/block-explorer
#to see blockchain use
http:localhost:3001/blockchain
http:localhost:3002/blockchain and so on.
#to mine use
http:localhost:3001/mine to mine terminal 3001 and use 3002,3003,3004,3005 and so on and on
#to consensus use [it mostly use or based on long chain rule and correct if incorrect transaction in there on nodes]
http:localhost:3001/consensus
# in postman 
Add nodes for making connection using route to connect various nodes
"http:localhost:3002/register-and-broadcast-node
in body pass:{
	"newNodeUrl":"http://localhost:3005"}
  click on send to add 3005
  and one by one add all or as per need
  
  # for transaction used
  in postman
  http://localhost:3002/transaction/broadcast
  for transaction in 3002 and replace with various e.g 3003/4/5/2/1 as per need 
  pass following on raw body
  {
	"amount":500,
	"sender":"QZELQASDFGHJKLZXC2",
	"recipient":"ALEXQWERTYUIOPAS"
}

refresh browser to see changes

 # now on block-explorer or 
http:localhost:3003/block-explorer
choose hash and input any hash to see data accroding to hash
choose sender or recipient address to see data accroding to particular user Transactions
choose Transaction to see data accroding to transaction.

# connect with ehter or XRP or any to use transaction
# method used
SSHA-256 ,CONSENSUS- long-chain rule used for implication

and some plugin can see on network.js #
THANKS
