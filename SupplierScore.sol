// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplierTrustScore {
    address public owner;
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function.");
        _;
    }
    
    constructor() {
        owner = msg.sender;
    }
    
    struct Supplier {
        uint256 trustableReviewsScore;
        uint256 totalCost;
        uint256 timelySupplyScore;
    }
    
    mapping(address => Supplier) public suppliers;
    mapping(address => uint256) public supplierScores; // Supplier ID to final score
    
    function setSupplierScore(address supplierAddress, uint256 trustableReviewsScore, uint256 totalCost, uint256 timelySupplyScore) external onlyOwner {
        require(trustableReviewsScore >= 1 && trustableReviewsScore <= 5, "Trustable reviews score must be between 1 and 5.");
        require(totalCost >= 1000 && totalCost <= 1200, "Total cost must be between 1000 and 1200.");
        require(timelySupplyScore >= 1 && timelySupplyScore <= 10, "Timely supply score must be between 1 and 10.");
        
        suppliers[supplierAddress] = Supplier(trustableReviewsScore, totalCost, timelySupplyScore);
        
        // Calculate and store the final score in the mapping
        uint256 finalScore = calculateFinalScore(supplierAddress);
        supplierScores[supplierAddress] = finalScore;
    }
    
    function calculateFinalScore(address supplierAddress) public view returns (uint256) {
        Supplier storage supplier = suppliers[supplierAddress];
        
        // Assign weights to the factors
        uint256 trustableReviewsWeight = 4;   // You can adjust this based on your preference
        uint256 totalCostWeight = 3;          // You can adjust this based on your preference
        uint256 timelySupplyWeight = 3;       // You can adjust this based on your preference
        
        // Calculate the final score (same calculation as before)
        uint256 weightedTrustableReviewsScore = supplier.trustableReviewsScore * trustableReviewsWeight;
        uint256 weightedTotalCost = supplier.totalCost * totalCostWeight;
        uint256 weightedTimelySupplyScore = supplier.timelySupplyScore * timelySupplyWeight;
        
        uint256 totalWeight = trustableReviewsWeight + totalCostWeight + timelySupplyWeight;
        uint256 finalScore = (weightedTrustableReviewsScore + weightedTotalCost + weightedTimelySupplyScore) / totalWeight;
        
        return finalScore;
    }
}
